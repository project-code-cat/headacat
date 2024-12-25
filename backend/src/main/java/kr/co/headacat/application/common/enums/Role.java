package kr.co.headacat.application.common.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.stream.Stream;

@Getter
@RequiredArgsConstructor
public enum Role {
    ADMIN("ROLE_ADMIN", "Administrator"),
    USER("ROLE_USER", "Common User");

    private final String key;
    private final String description;

    public static String[] keys() {
        return Stream.of(Role.values()).map(Role::getKey).toArray(String[]::new);
    }

    public static String[] assignees() {
        return new String[] {ADMIN.getKey(), USER.getKey()};
    }

    public static String[] administrators() {
        return new String[] {ADMIN.getKey()};
    }
}
