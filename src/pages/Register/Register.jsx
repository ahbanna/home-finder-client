import { useState } from "react";
import "./Register.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("Registration data:", {
      fullName,
      role,
      phoneNumber,
      email,
      password,
    });

    try {
      const response = await fetch(
        "https://home-finder-server-d0k4aguh9-ahbanna.vercel.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            role,
            phoneNumber,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("Registration successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        });
        // Optionally, you can redirect the user to the login page or perform other actions.
      } else {
        console.error("Registration failed");
        // Handle registration failure, show error messages, etc.
        Swal.fire({
          icon: "error",
          title: "User is already exists",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle network errors, server down, etc.
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "Please check your information and try again.",
      });
    }
  };

  return (
    <div className="register-area">
      <Container>
        <div className="form-content">
          <div className="form-title">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
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
