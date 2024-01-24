import "./Login.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://home-finder-server-pght7p0k1-ahbanna.vercel.app/login",
        {
          email,
          password,
        }
      );
      const token = response.data.token;

      localStorage.setItem("token", token);

      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.error("Login error:", err.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: err.response.data.message || "An error occurred",
      });
    }
  };

  return (
    <div className="login-area">
      <Container>
        <div className="form-content">
          <div className="form-title">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <div className="login-form">
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
