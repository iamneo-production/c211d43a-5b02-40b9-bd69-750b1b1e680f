package com.example.springapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	public static final String[] ENDPOINTS_WHITELIST = { "/users/login", "/users/new", "/users/welcome","/candidate/getalluser","/admins","/trainee" };

//	@Autowired
//	private CorsConfigurationSimple corsConfigurationSimple;
	@Autowired
	private JwtAuthFilter authFilter;

//	@Bean
//	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception { // corsConfigurationSimple.corsCOstomizer(http);
//																							// return
//		http.csrf().disable().authorizeHttpRequests().requestMatchers(requestMatchers).permitAll().and()
//				.authorizeHttpRequests().requestMatchers("/users/**").authenticated().and().sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//				.authenticationProvider(authenticationProvider())
//				.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class).build();
//	}
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors() .and() .authorizeHttpRequests().antMatchers(ENDPOINTS_WHITELIST).permitAll()
				.anyRequest().authenticated().and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authenticationProvider(authenticationProvider())
				.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class);
				http.csrf().disable();

		return http.build();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		return new UserInfoUserDetailsService();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider;
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
//	  @Bean
//	    public CorsConfigurationSource corsConfigurationSource() {
//	        CorsConfiguration configuration = new CorsConfiguration();
//	        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Set the allowed origin domains
//	        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE")); // Set the allowed HTTP methods
//	        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type,Accept, X-Requested-With")); // Set the allowed headers
//	        configuration.setAllowCredentials(true); // Enable support for credentials (e.g., cookies)
//
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", configuration);
//	        return source;
//	    }
	
}
