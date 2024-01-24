import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-area">
      <Container>
        <Navbar>
          <div className="header-logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="menu-items">
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apartments">Apartments</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/dashboard">My Dashboard</NavLink>
              {/* <NavLink to="/addnewhouse">Add New House</NavLink> */}
            </Nav>
          </div>
          <div className="login-reg">
            <Nav>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </Nav>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
