package kr.co.headacat.application.sign.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import kr.co.headacat.application.sign.service.SignService;
import kr.co.headacat.application.sign.vo.RequestLoginSocialVo;
import kr.co.headacat.application.sign.vo.RequestPrivacyUpdateVo;
import kr.co.headacat.application.sign.vo.ResponseUserVo;
import kr.co.headacat.core.baseClass.AbstractController;
import kr.co.headacat.core.domain.vo.BizResponseVo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sign")
@Tag(name = "user",
     description = "Controller that accommodates all APIs related to Sign pages including Sign In, Sign Out, etc.")
public class SignController extends AbstractController {
    final private SignService signService;

    @PostMapping("/login-social")
    public BizResponseVo<ResponseUserVo> loginSocial(@RequestBody @Valid RequestLoginSocialVo requestLoginSocialVo) {

    }

    @PostMapping("/privacy-update")
    public BizResponseVo<Boolean> privacyUpdate(@RequestBody @Valid RequestPrivacyUpdateVo requestPrivacyUpdateVo) {
        return this.makeResponse(signService.privacyUpdate(requestPrivacyUpdateVo));
    }
}