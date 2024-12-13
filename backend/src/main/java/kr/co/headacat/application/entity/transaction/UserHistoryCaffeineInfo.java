package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_history_caffeine_info")
public class UserHistoryCaffeineInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "history_id", referencedColumnName = "id", nullable = false)
    private UserHistory userHistory;

    @ManyToOne
    @JoinColumn(name = "caffeine_info_id", referencedColumnName = "id", nullable = false)
    private CaffeineInfo caffeineInfo;
}
