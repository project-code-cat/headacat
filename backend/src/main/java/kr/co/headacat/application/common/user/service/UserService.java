package kr.co.headacat.application.common.user.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.user.repo.UserRepository;
import kr.co.headacat.core.baseClass.AbstractService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService extends AbstractService {
    private final UserRepository userRepository;
    private final SearchUserService searchUserService;

    public void insertUser(User user) {
        if (!searchUserService.exists(user.getEmail())) {
            throw new EntityNotFoundException("User not found. email: " + user.getEmail());
        }
        userRepository.save(user);
    }
}
