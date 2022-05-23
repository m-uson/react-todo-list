import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-nav">
      <Link to="/">Задачи</Link>
      <Link to="/create">Добавить новую задачу</Link>
    </div>
  );
};

export default Navbar;
