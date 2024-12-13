package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_exercise")
public class UserDefaultExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Column(length = 4, nullable = false, columnDefinition = "VARCHAR(4) DEFAULT '0001'")
    private String cardioTime = "0001";

    @Column(length = 4, nullable = false, columnDefinition = "VARCHAR(4) DEFAULT '0001'")
    private String weightTrainingTime = "0001";

    @Column(nullable = false, columnDefinition = "TINYINT DEFAULT 1")
    private int strength = 1;
}
