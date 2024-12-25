package kr.co.headacat.application.common.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_tracking")
public class UserHistoryTracking extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @Column(length = 12, nullable = false)
    private String startDatetime;

    @Column(length = 4, nullable = false, columnDefinition = "VARCHAR(4) DEFAULT '0001'")
    private String duration = "0001";

    @Column(nullable = false, columnDefinition = "TINYINT DEFAULT 1")
    private int strength = 1;
}
