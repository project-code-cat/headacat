package kr.co.headacat.application.sign.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Pattern;

public class ResponseUserVo {
    @Pattern(regexp = "^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)*(\\.[a-zA-Z]{2,})$", message = "이메일이 잘못된 형식입니다.")
    @Schema(description = "사용자 이메일", example = "tester@gmail.com")
    private String email;
}
