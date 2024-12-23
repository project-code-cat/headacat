package kr.co.headacat.application.user.service;

import jakarta.transaction.Transactional;
import kr.co.headacat.application.entity.master.User;
import kr.co.headacat.application.user.repo.UserRepository;
import kr.co.headacat.application.user.vo.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class OAuth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getRegistrationId();
        Map<String, Object> attributes = oAuth2User.getAttributes();
        return new PrincipalDetails(this.get(provider, attributes), attributes);
    }

    private User get(String provider, Map<String, Object> attributes) {
        String provideId = (String) attributes.get("sub");
        String email = (String) attributes.get("email");
        String username = (String) attributes.get("name");
        byte[] password = provideId.getBytes();
        String role = "ROLE_USER"; // TODO: ROLE은 어떻게 처리할 생각?
        Optional<User> maybeUser = userRepository.findByEmail(email);
        return maybeUser.orElseGet(() -> {
            User newUser = User.builder()
                    .password(password)
                    .email(email)
                    .username(username)
                    .provider(provider)
                    .build();
            userRepository.save(newUser);
            return newUser;
        });
    }
}