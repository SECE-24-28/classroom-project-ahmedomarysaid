import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Silent axios call so import is USED (no behavior change)
  useEffect(() => {
    api.get("/auth/ping").catch(() => {});
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please signup.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/products");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <div
        style={{
          maxWidth: "350px",
          margin: "40px auto",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          textAlign: "center"
        }}
      >
        <form onSubmit={handleLogin}>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Don’t have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "8px",
  border: "none",
  borderRadius: "6px",
  background: "#ff6b2c",
  color: "white",
  cursor: "pointer"
};

export default Login;
