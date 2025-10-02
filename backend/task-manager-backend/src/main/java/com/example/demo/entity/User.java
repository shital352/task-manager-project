package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.List;

import org.springframework.scheduling.config.Task;

@Entity
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ToDo> tasks;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<ToDo> getTasks() {
		return tasks;
	}

	public void setTasks(List<ToDo> tasks) {
		this.tasks = tasks;
	}

	

    // Getters & setters
    
}
