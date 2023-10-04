import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Lista de tareas - Next js</div>
      </div>
      <div className="nav-btn">
        <label>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <ul className="nav-list">
        <li>
          <Link href={"/newTask"}>Crear tarea</Link>
        </li>
        <li>
          <Link href={"/"}>Ver tareas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
