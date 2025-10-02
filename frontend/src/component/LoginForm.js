"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./LoginForm.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token || "dummy"); // store token/session if needed
      alert("Login successful!");
      router.push("/TasksPage");
    } catch (error) {
      alert("Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
