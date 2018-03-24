import React from 'react';
// import NavigationItem from "../navigationItem/NavigationItem";
import {NavLink} from "react-router-dom";

const NavigationItems = props => (
  <ul className="NavigationItems">
    <NavLink to="/" exact>contacts </NavLink>
    <NavLink to="/addcontact">Add new contact</NavLink>
  
  </ul>
);

export default NavigationItems;