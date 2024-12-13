package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.PainArea;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_pain_area")
public class UserHistoryPainArea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @ManyToOne
    @JoinColumn(name = "pain_area_id", referencedColumnName = "id", nullable = false)
    private PainArea painArea;
}
