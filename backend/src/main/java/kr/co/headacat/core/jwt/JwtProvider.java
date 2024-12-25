package kr.co.headacat.core.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.core.utility.ServletRequestUtility;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Component
public class JwtProvider {
    private final SecretKey secretKey;
    private final long expirationSeconds;
    private final UserDetailsService userDetailsService;

    public JwtProvider(@Value("${jwt.secret}") String secret,
                       @Value("${jwt.expired}") long expireAt,
                       UserDetailsService userDetailsService) {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.secretKey = Keys.hmacShaKeyFor(keyBytes);
        this.expirationSeconds = (long)(expireAt * 0.001);
        this.userDetailsService = userDetailsService;
    }

    public String createAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", user.getUsername());
        claims.put("email", user.getEmail());
        claims.put("userId", user.getEmail().substring(0, user.getEmail().indexOf('@')));
        claims.put("id", user.getId());
        claims.put("ip", ServletRequestUtility.getServletRequest().getRemoteAddr());
        claims.put("provider", user.getProvider());
        return this.generateAccessToken(claims, user.getEmail());
    }

    public String generateAccessToken(Map<String, Object> claims, String subject) {
        ZonedDateTime now = ZonedDateTime.now();
        ZonedDateTime validity = now.plusSeconds(expirationSeconds);
        return Jwts.builder()
                .header().add("type", "JWT").and()
                .issuedAt(Date.from(now.toInstant()))
                .claims(claims)
                .subject(subject)
                .expiration(Date.from(validity.toInstant()))
                .signWith(this.secretKey, Jwts.SIG.HS256)
                .compact();
    }

    public String resolve(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return null;
    }

    public boolean validate(String token) {
        try {
            Jwts.parser()
                    .verifyWith(this.secretKey)
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (SignatureException | ExpiredJwtException e) {
            log.error("Token is expired.", e);
            throw e;
        } catch (SecurityException | MalformedJwtException e) {
            log.error("Token is invalid.", e);
            throw e;
        } catch (UnsupportedJwtException e) {
            log.error("Token is unsupported.", e);
            throw e;
        } catch (IllegalArgumentException e) {
            log.error("Claims string is empty.", e);
            throw e;
        }
    }

    public Authentication getAuthentication(String token) {
        Claims claims = this.parseClaims(token);
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(this.getEmail(token));
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

    private Claims parseClaims(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(this.secretKey)
                    .build()
                    .parseSignedClaims(token).getPayload();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    public String getEmail(String token) { return this.parseClaims(token).getSubject(); }
}
