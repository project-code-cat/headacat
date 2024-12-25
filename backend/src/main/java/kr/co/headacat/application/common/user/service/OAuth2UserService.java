package kr.co.headacat.application.common.user.service;

import jakarta.transaction.Transactional;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.user.provider.OAuth2Provider;
import kr.co.headacat.application.common.user.vo.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class OAuth2UserService extends DefaultOAuth2UserService {
    private final Map<String, OAuth2Provider> oAuth2Providers;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String provider = userRequest.getClientRegistration().getRegistrationId();
        Map<String, Object> attributes = oAuth2User.getAttributes();
        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails()
                .getUserInfoEndpoint().getUserNameAttributeName();
        return new PrincipalDetails(this.get(provider, attributes), userNameAttributeName, attributes);
    }

    private User get(String provider, Map<String, Object> attributes) {
        return oAuth2Providers.get(provider).getUser(provider, attributes);
    }
}