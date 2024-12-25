package kr.co.headacat.application.common.user.provider;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.enums.Role;
import kr.co.headacat.application.common.user.service.SearchUserService;
import kr.co.headacat.application.common.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class GoogleOAuth2Provider implements OAuth2Provider {
    private final SearchUserService searchUserService;
    private final UserService userService;
    private GoogleIdTokenVerifier verifier;
    private String clientId;

    @Override
    public User getUser(String provider, Map<String, Object> attributes) {
        String provideId = (String) attributes.get("sub");
        String email = (String) attributes.get("email");
        String username = (String) attributes.get("name");
        String picture = (String) attributes.get("picture");
        byte[] password = provideId.getBytes();
        Role role = Role.USER;
        Optional<User> maybeUser = Optional.ofNullable(searchUserService.findByEmailIfExists(email));
        return maybeUser.orElseGet(() -> {
            User newUser = User.builder()
                    .password(password)
                    .email(email)
                    .username(username)
                    .profile(picture)
                    .provider(provider)
                    .role(role)
                    .build();
            userService.insertUser(newUser);
            return newUser;
        });
    }

    public void verify(String idToken) {
        if (Objects.isNull(verifier)) {
            this.createVerifier();
        }

        // TODO: 난또까 하삼.
        try {
            GoogleIdToken googleIdToken = verifier.verify(idToken);
            GoogleIdToken.Payload payload = googleIdToken.getPayload();
        } catch (GeneralSecurityException | IOException e) {

        }
    }

    private void createVerifier() {
        NetHttpTransport netHttpTransport = new NetHttpTransport();
        JsonFactory jsonFactory = new GsonFactory();
        verifier = new GoogleIdTokenVerifier.Builder(netHttpTransport, jsonFactory)
                .setAudience(Collections.singletonList(clientId))
                .build();
    }
}
