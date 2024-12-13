package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.Symptom;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_sypmtom")
public class UserDefaultSymptom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "symptom_id", referencedColumnName = "id", nullable = false)
    private Symptom symptom;
}
