import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={Logo} alt="Logo" />
    </nav>
  );
}
