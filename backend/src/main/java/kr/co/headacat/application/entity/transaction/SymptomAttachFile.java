package kr.co.headacat.application.entity.transaction;

import jakarta.persistence.*;
import kr.co.headacat.application.entity.master.Attach;
import kr.co.headacat.application.entity.master.Symptom;
import lombok.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "symptom_attach_file")
public class SymptomAttachFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "symptom_id", referencedColumnName = "id", nullable = false)
    private Symptom symptom;

    @ManyToOne
    @JoinColumn(name = "attach_id", referencedColumnName = "id", nullable = false)
    private Attach attach;
}
