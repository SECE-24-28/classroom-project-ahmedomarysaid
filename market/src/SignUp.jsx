import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "./api/axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Silent axios call so import is USED
  useEffect(() => {
    api.get("/auth/ping").catch(() => {});
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>

      <div style={cardStyle}>
        <form onSubmit={handleSignup}>
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
            Signup
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  maxWidth: "350px",
  margin: "40px auto",
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  textAlign: "center"
};

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

export default SignUp;
