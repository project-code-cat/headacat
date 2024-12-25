package kr.co.headacat.application.sign.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class RequestPrivacyUpdateVo {
    @Pattern(regexp = "^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)*(\\.[a-zA-Z]{2,})$", message = "이메일이 잘못된 형식입니다.")
    @Schema(description = "사용자 이메일", example = "tester@gmail.com")
    private String email;

    @Pattern(regexp="^[MF]$", message = "성별은 'M' 또는 'F'만 가능합니다.")
    @Schema(description = "성별(Male, Female)", example = "M")
    private String sex;

    @Size(min=8, max=8, message = "생년월일은 8자리 날짜 형식이어야 합니다.")
    @Pattern(regexp="^\\d{8}$", message = "생년월일이 잘못된 형식입니다.")
    @Schema(description = "생년월일", example = "19940518")
    private String dateOfBirth;
}
