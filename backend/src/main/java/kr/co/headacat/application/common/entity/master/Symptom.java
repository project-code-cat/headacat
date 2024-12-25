package kr.co.headacat.application.common.entity.master;

import jakarta.persistence.*;
import kr.co.headacat.core.baseClass.BaseEntity;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "company_mst")
public class Symptom extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="parent_id", referencedColumnName = "id")
    private Symptom parent;

    @Column(length = 100, nullable = false)
    private String name;
}
