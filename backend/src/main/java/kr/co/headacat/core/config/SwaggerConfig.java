package kr.co.headacat.core.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI openAPI() {
        SecurityRequirement securityRequirement =
                new SecurityRequirement().addList("JWT");
        return new OpenAPI()
                .components(this.createComponents())
                .info(this.apiInfo())
                .addSecurityItem(securityRequirement);
    }

    private Components createComponents() {
        return new Components().addSecuritySchemes("JWT",
                new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .name("Authorization")
                        .in(SecurityScheme.In.HEADER)
                        .bearerFormat("JWT"));
    }

    private Info apiInfo() {
        return new Info()
                .title("API Headacat System")
                .description("This is the API Test of Headacat")
                .version("1.0");
    }
}
