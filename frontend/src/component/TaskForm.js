"use client";
import { useState } from "react";
import axios from "axios";
import "./TaskForm.css";

export default function TaskForm({ fetchTasks, userId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    try {
      await axios.post(`http://localhost:8080/tasks/${userId}`, {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-form">
      <h3>Add Task</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
