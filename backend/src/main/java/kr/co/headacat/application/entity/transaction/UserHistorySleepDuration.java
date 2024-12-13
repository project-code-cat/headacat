package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_symptom")
public class UserHistorySleepDuration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @Column(length = 4, nullable = false)
    private String sleep;

    @Column(length = 4, nullable = false)
    private String wakeUp;
}
