import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router";

export default function() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh

    // Create data object
    const data = {
      email : email,
      password : password
    };

    try {
      // Send POST request to Flask API
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle the response
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setEmail("");
        setPassword("");

        

      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <div>
            <h3>Login </h3>
            <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
        </div>
    )
}

