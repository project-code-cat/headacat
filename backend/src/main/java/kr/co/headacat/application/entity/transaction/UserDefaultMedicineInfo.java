package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_medicine_info")
public class UserDefaultMedicineInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "medicine_info_id", referencedColumnName = "id", nullable = false)
    private MedicineInfo medicineInfo;

    @Column(length = 1, nullable = false, columnDefinition = "VARCHAR(1) DEFAULT 'N'")
    private String bookmark = "N";
}
;