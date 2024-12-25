package kr.co.headacat.application.common.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_medicine_info")
public class UserHistoryMedicineInfo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @ManyToOne
    @JoinColumn(name = "medicine_info_id", referencedColumnName = "id", nullable = false)
    private MedicineInfo medicineInfo;
}
