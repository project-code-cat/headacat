package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.Company;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "medicine_Info")
public class MedicineInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Column(length = 100, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "company_id", referencedColumnName = "id", nullable = false)
    private Company company;

    @Column(length = 7, nullable = false, columnDefinition = "VARCHAR(7) DEFAULT '#FFFFFF'")
    private String colorBackground = "#FFFFFF";

    @Column(length = 7, nullable = false, columnDefinition = "VARCHAR(7) DEFAULT '#000000'")
    private String colorMedicine = "#000000";
}
