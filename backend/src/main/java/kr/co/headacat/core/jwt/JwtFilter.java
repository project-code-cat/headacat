package kr.co.headacat.core.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Objects;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter  {
    private final JwtProvider jwtProvider;

    @Override
    public void doFilterInternal(
            @NonNull final HttpServletRequest request,
            @NonNull final HttpServletResponse response,
            @NonNull final FilterChain chain) throws ServletException, IOException {
        String token = jwtProvider.resolve(request);
        if (!Objects.isNull(token) && jwtProvider.validate(token)) {
            SecurityContextHolder.getContext()
                    .setAuthentication(jwtProvider.getAuthentication(token));
        }
        chain.doFilter(request, response);
    }
}
