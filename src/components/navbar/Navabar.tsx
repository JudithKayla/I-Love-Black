import { useRef } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="logo">
        <img src="/assets/sparkles.png" />
        <h3>JUDITH CHUKWUKA</h3>
      </div>
      <nav ref={navRef}>
        <a href="/#home" onClick={showNavbar}>
          Home
        </a>
        <a href="/#" onClick={showNavbar}>
          Resume
        </a>
        <a href="/#portfolio" onClick={showNavbar}>
          Portfolio
        </a>
        <a href="/#contact" onClick={showNavbar}>
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <X color="black" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <Menu color="black" />
      </button>
    </header>
  );
}

export default Navbar;
