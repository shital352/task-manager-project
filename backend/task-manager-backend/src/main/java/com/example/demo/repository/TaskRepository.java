package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.ToDo;

import java.util.List;

public interface TaskRepository extends JpaRepository<ToDo, Long> {
    List<ToDo> findByUserId(Long userId);
}
