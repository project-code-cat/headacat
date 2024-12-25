package kr.co.headacat.application.common.user.provider;

import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.enums.Role;
import kr.co.headacat.application.common.user.service.SearchUserService;
import kr.co.headacat.application.common.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Optional;

@Component("apple")
@RequiredArgsConstructor
public class AppleOAuth2Provider implements OAuth2Provider {
    private final SearchUserService searchUserService;
    private final UserService userService;

    @Override
    public User getUser(String provider, Map<String, Object> attributes) {
        String provideId = (String) attributes.get("sub");
        String email = (String) attributes.get("email");
        byte[] password = provideId.getBytes();
        Role role = Role.USER;
        Optional<User> maybeUser = Optional.ofNullable(searchUserService.findByEmailIfExists(email));
        return maybeUser.orElseGet(() -> {
            User newUser = User.builder()
                    .password(password)
                    .email(email)
                    .username(email.substring(0, email.indexOf('@')))
                    .provider(provider)
                    .role(role)
                    .build();
            userService.insertUser(newUser);
            return newUser;
        });
    }
}
