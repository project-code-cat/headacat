package kr.co.headacat.application.entity.master;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "authority_mst")
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 100, nullable = false, unique = true)
    private String name;

    @Builder.Default
    @Column(nullable = false, columnDefinition = "int default 1")
    private int level = 1;
}
