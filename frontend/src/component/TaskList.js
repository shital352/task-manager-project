"use client";
import { useState } from "react";
import axios from "axios";
import "./TaskList.css";

export default function TaskList({ tasks, fetchTasks, userId }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditStatus(task.status);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/tasks/${editingTaskId}`, {
        title: editTitle,
        description: editDescription,
        status: editStatus,
      });
      setEditingTaskId(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          {editingTaskId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
              >
                <option>Pending</option>
                <option>Completed</option>
              </select>
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditingTaskId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{task.title}</strong>: {task.description} [{task.status}]
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
