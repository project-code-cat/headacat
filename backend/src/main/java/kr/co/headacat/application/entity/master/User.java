package kr.co.headacat.application.entity.master;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_mst")
public class User {
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

    //TODO: 추후 수정이 필요한지는 몰루?
    @Column
    private String provider;

    @Column
    private Timestamp deletedAt;

    @Column(length = 1)
    private String sex;

    @Column(length = 6)
    private String dateOfBirth;

    @Column(length = 500)
    private String message;
}
