package kr.co.headacat.core.utility;

import jakarta.servlet.http.HttpServletRequest;
import kr.co.headacat.core.domain.vo.RequestContextVo;
import lombok.experimental.UtilityClass;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Optional;

@UtilityClass
public class ServletRequestUtility {
    public HttpServletRequest getServletRequest() {
        return Optional.of(RequestContextHolder.getRequestAttributes())
                .map(ra -> ((ServletRequestAttributes) ra).getRequest())
                .orElse(null);
    }

    public String getRequestURI() {
        return Optional.ofNullable(ServletRequestUtility.getServletRequest())
                .map(HttpServletRequest::getRequestURI)
                .orElse(null);
    }

    public RequestContextVo getServletRequestContextVo() {
        return (RequestContextVo) Optional.ofNullable(getServletRequest())
                .map(req -> req.getAttribute("_REQUEST_CONTEXT_VO")).orElse(null);
    }

    public String getHeader(String key) {
        return Optional.ofNullable(ServletRequestUtility.getServletRequest()).map(req -> req.getHeader(key))
                .orElse(null);
    }
}
