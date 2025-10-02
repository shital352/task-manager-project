package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/h2-console/**").permitAll()  // allow H2 console
                .requestMatchers("/auth/**").permitAll()        // allow signup/login
                .requestMatchers("/tasks/**").permitAll()       // allow task APIs
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf.disable()) // disable CSRF for APIs & H2 console
            .headers(headers -> headers.frameOptions().disable()); // allow H2 console in iframe

        return http.build();
    }
}
