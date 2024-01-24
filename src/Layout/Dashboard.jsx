import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdOtherHouses } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="dashboard-area">
      {/* <Container> */}
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/dashboard/addnewhouse">
              <MdOtherHouses></MdOtherHouses> Add New Houses
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managehouses">
              <MdOtherHouses></MdOtherHouses> Manage Houses
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myhouses">
              <FaDisplay></FaDisplay> See My Houses
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Dashboard;
