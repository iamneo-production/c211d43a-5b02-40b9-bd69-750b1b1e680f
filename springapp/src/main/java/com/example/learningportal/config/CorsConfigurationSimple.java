package com.example.learningportal.config;

import java.util.List;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;


@Component
public class CorsConfigurationSimple {
	
	public void corsCOstomizer(HttpSecurity http) throws Exception 
	{
		http.cors(c->{
			CorsConfigurationSource source = s->{
				CorsConfiguration cc= new CorsConfiguration();
				cc.setAllowCredentials(true);
				cc.setAllowedOrigins(List.of("http://localhost:4200"));
				cc.setAllowedHeaders(List.of("*"));
				cc.setAllowedMethods(List.of("*"));
				return cc;
				
			};
			c.configurationSource(source);
			
		});
	}

}