import React from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import { BiDoughnutChart, BiDollar } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLogo">
        <Link to="/dashboard">SHARENERGY</Link>
      </div>
      <div className="sidebar-navegation">
        <NavLink activeClassName="selected" to="/dashboard">
          <div>
            <BiDoughnutChart />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink activeClassName="selected" to="/clientes">
          <div>
            <BiDollar />
            <span>Clientes</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
