"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./SignupForm.css";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:8080/auth/signup", {
        username,
        password,
      });
      alert("Signup successful!");
      router.push("/");
    } catch (error) {
      alert("Signup failed!");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
