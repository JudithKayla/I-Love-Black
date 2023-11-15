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
        <a
          href="https://drive.google.com/file/d/1_R_7NvO517Q2s_WJ2OAo4Rams1poIuBp/view?usp=drive_link"
          target="_"
          onClick={showNavbar}
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/judith-chukwuka"
          target="_"
          onClick={showNavbar}
        >
          Linkedin
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
