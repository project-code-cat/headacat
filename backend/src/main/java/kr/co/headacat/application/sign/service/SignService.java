package kr.co.headacat.application.sign.service;

import jakarta.transaction.Transactional;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.user.service.SearchUserService;
import kr.co.headacat.application.common.utility.DateUtility;
import kr.co.headacat.application.sign.vo.RequestLoginSocialVo;
import kr.co.headacat.application.sign.vo.RequestPrivacyUpdateVo;
import kr.co.headacat.core.baseClass.AbstractService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class SignService extends AbstractService {
    final private SearchUserService searchUserService;

    public User loginSocial(RequestLoginSocialVo requestLoginSocialVo) {

    }

    public boolean privacyUpdate(RequestPrivacyUpdateVo requestPrivacyUpdateVo) {
        User user = searchUserService.findByEmail(requestPrivacyUpdateVo.getEmail());
        user.setSex(requestPrivacyUpdateVo.getSex());

        String dateOfBirthInReq = requestPrivacyUpdateVo.getDateOfBirth();
        if (!DateUtility.validate(dateOfBirthInReq)) {
            throw new IllegalArgumentException("유효하지 않은 날짜입니다. 날짜: " + dateOfBirthInReq);
        }

        user.setDateOfBirth(requestPrivacyUpdateVo.getDateOfBirth());
        return true;
    }
}
