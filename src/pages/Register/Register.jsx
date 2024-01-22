import { useState } from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("Registration data:", {
      fullName,
      role,
      phoneNumber,
      email,
      password,
    });
  };
  return (
    <div className="register-area">
      <Container>
        <div className="form-content">
          <div className="form-title">
            <NavLink to="/login">Login</NavLink>{" "}
            <NavLink to="/register">Register</NavLink>{" "}
          </div>
          <form onSubmit={handleRegistration}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
            <label>
              Role:
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="House Owner">House Owner</option>
                <option value="House Renter">House Renter</option>
              </select>
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
