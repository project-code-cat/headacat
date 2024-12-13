package kr.co.headacat.application.entity.master;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "notice_mst")
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "text")
    private String contents;
}
