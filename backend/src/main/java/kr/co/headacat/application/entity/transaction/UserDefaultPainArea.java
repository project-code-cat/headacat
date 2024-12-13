package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.PainArea;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_pain_area")
public class UserDefaultPainArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "pain_area_id", referencedColumnName = "id", nullable = false)
    private PainArea painArea;
}
