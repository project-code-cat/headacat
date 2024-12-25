package kr.co.headacat.core.baseClass;

import kr.co.headacat.core.domain.vo.BizResponseVo;
import kr.co.headacat.core.utility.ResponseUtility;
import org.springframework.http.HttpStatus;

public class AbstractController {
    protected <T> BizResponseVo<T> makeResponse(final T body) {
        return this.makeResponse(200, "", body);
    }

    protected <T> BizResponseVo<T> makeResponse(final HttpStatus status, final T body) {
        return this.makeResponse(status.value(), status.getReasonPhrase(), body);
    }

    protected <T> BizResponseVo<T> makeResponse(final int resultCode, final String message, final T body) {
        return ResponseUtility.makeResponse(resultCode, message, body);
    }
}
