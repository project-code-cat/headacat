package kr.co.headacat.application.common.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.common.entity.master.User;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_caffeine_info")
public class UserDefaultTracking extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Column(length = 12, nullable = false)
    private String startDatetime;

    @Column(length = 4, nullable = false, columnDefinition = "VARCHAR(4) DEFAULT '0001'")
    private String duration = "0001";

    @Column(nullable = false, columnDefinition = "TINYINT DEFAULT 1")
    private int strength = 1;
}
