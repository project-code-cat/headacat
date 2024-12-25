package kr.co.headacat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class HeadacatApplication {

    public static void main(String[] args) {
        SpringApplication.run(HeadacatApplication.class, args);
    }

}
