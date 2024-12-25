package kr.co.headacat.core.utility;

import kr.co.headacat.core.domain.vo.BizResponseVo;
import kr.co.headacat.core.domain.vo.RequestContextVo;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ResponseUtility {
    public <T> BizResponseVo<T> makeResponse(Integer resultCode, final String message, final T body) {
        BizResponseVo<T> responseVo = new BizResponseVo<>(resultCode, message, body);
        RequestContextVo contextVo = ServletRequestUtility.getServletRequestContextVo();
        responseVo.setContextVo(contextVo);

        String guid = contextVo == null ? null : contextVo.getGuid();
        if (guid != null) responseVo.setGuid(guid);
        return responseVo;
    }
}
