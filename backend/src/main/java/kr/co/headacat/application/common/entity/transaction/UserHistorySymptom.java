package kr.co.headacat.application.common.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.common.entity.master.Symptom;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_symptom")
public class UserHistorySymptom extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @ManyToOne
    @JoinColumn(name = "symptom_id", referencedColumnName = "id", nullable = false)
    private Symptom symptom;
}
