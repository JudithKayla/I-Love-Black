import { useRef, useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <img src="/public/assets/sparkles.png" />
        <h3>JUDITH CHUKWUKA</h3>
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Resume</a>
        <a href="/#">Portfolio</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <X />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <Menu />
      </button>
    </header>
  );
}

export default Navbar;
