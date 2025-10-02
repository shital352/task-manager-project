"use client";
import { useState, useEffect } from "react";
import TaskForm from "../../component/TaskForm";
import TaskList from "../../component/TaskList";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const userId = 1; // you can get this dynamically from login

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`http://localhost:8080/tasks/${userId}`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TaskForm fetchTasks={fetchTasks} userId={userId} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} userId={userId} />
    </div>
  );
}
