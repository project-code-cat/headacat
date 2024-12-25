package kr.co.headacat.application.common.entity.master;

import jakarta.persistence.*;
import kr.co.headacat.application.common.enums.Role;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_mst")
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private byte[] password;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false, unique = true)
    private String username;

    @Column
    private String profile;

    //TODO: 추후 수정이 필요한지는 몰루?
    @Column
    private String provider;

    @Enumerated(EnumType.STRING)
    @Column(length = 20, nullable = false, columnDefinition = "VARCHAR(20) DEFAULT 'ROLE_USER'")
    private Role role = Role.USER;

    @Column
    private Timestamp deletedAt;

    @Column(length = 1)
    private String sex;

    @Column(length = 6)
    private String dateOfBirth;

    @Column(length = 500)
    private String message;
}
