package kr.co.headacat.application.user.handler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.co.headacat.application.user.vo.PrincipalDetails;
import kr.co.headacat.core.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
     private final JwtProvider jwtProvider;
     private static final String SUCCESS_URI = "/api/auth/oauth2-success";

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        String token = jwtProvider.createAccessToken(principalDetails.user());

        String redirectUrl = UriComponentsBuilder.fromUriString(SUCCESS_URI)
                .queryParam("token", token)
                .build().toString();

        response.sendRedirect(redirectUrl);
    }
}
