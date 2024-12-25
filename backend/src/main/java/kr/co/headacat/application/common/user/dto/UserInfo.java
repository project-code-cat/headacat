package kr.co.headacat.application.common.user.dto;

import jakarta.security.auth.message.AuthException;
import kr.co.headacat.application.common.entity.master.User;
import lombok.Builder;

import java.util.Map;

@Builder
public record UserInfo(
        String email,
        String profile
) {
    public static UserInfo of(String regiId, Map<String, Object> attributes) throws AuthException {
        return switch (regiId) {
            case "google" -> ofGoogle(attributes);
            case "apple" -> ofApple(attributes);
            default -> throw new AuthException(
                    "illegal registration ID. ID: " + regiId + ", attributes: " + attributes);
        };
    }

    private static UserInfo ofGoogle(Map<String, Object> attributes) {
        return UserInfo.builder()
                .email((String) attributes.get("email"))
                .profile((String) attributes.get("profile"))
                .build();

    }

    // TODO: ofApple 완성할 필요가 있음.
    private static UserInfo ofApple(Map<String, Object> attributes) {
        return null;
    }

    public User toUser() {
        // TODO: 추후 뭔가 요소 추가가 필요할듯?
        return User.builder()
                .email(email)
                .username("")
                .build();
    }
}
