package kr.co.headacat.application.common.user.provider;

import kr.co.headacat.application.common.entity.master.User;

import java.util.Map;

public interface OAuth2Provider {
    User getUser(String provider, Map<String, Object> attributes);
}
