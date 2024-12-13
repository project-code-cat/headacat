package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.User;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_default_caffeine_info")
public class UserDefaultCaffeineInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "caffeine_info_id", referencedColumnName = "id", nullable = false)
    private CaffeineInfo caffeineInfo;

    @Column(length = 1, nullable = false, columnDefinition = "VARCHAR(1) DEFAULT 'N'")
    private String bookmark = "N";
}
