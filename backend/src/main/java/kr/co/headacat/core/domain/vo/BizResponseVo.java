package kr.co.headacat.core.domain.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.io.Serial;
import java.time.LocalDateTime;

@Getter @Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class BizResponseVo<T> extends BaseVo {
    @Serial
    private static final long serialVersionUID = -1297884405516187541L;

    @NonNull
    private Integer resultCode;

    @NonNull
    private String message;

    @NonNull
    private T body;

    private String guid;

    @JsonIgnore
    private RequestContextVo contextVo;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createDate = LocalDateTime.now();
}
