package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.ToDo;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/{userId}")
    public List<ToDo> getTasks(@PathVariable Long userId){
        return taskRepository.findByUserId(userId);
    }

    @PostMapping("/{userId}")
    public ToDo addTask(@PathVariable Long userId, @RequestBody ToDo task){
        task.setUser(userRepository.findById(userId).orElseThrow());
        task.setStatus("Pending");
        return taskRepository.save(task);
    }

    @PutMapping("/{taskId}")
    public ToDo updateTask(@PathVariable Long taskId, @RequestBody ToDo task){
        ToDo existing = taskRepository.findById(taskId).orElseThrow();
        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setStatus(task.getStatus());
        return taskRepository.save(existing);
    }

    @DeleteMapping("/{taskId}")
    public String deleteTask(@PathVariable Long taskId){
        taskRepository.deleteById(taskId);
        return "Task deleted";
    }
}
