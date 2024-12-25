package kr.co.headacat.application.common.user.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.application.common.user.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class SearchUserService {
    final private UserRepository userRepository;

    public User findByEmailIfExists(String email) {
        return Optional.ofNullable(email)
                .flatMap(userRepository::findByEmail)
                .filter(user -> Objects.isNull(user.getDeletedAt()))
                .orElse(null);
    }

    public User findByEmail(String email) {
        User user = this.findByEmailIfExists(email);
        if (Objects.isNull(user)) {
            throw new EntityNotFoundException("존재하지 않는 사용자입니다. 이메일: " + email);
        }
        return user;
    }

    public boolean exists(String email) {
        return userRepository.existsByEmail(email);
    }
}
