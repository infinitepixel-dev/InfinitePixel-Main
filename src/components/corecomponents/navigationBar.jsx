import { useState } from "react";
import "./navigationBar.css"; // Ensure this path is correct

const SidebarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu has been", isOpen ? "closed" : "opened");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navMenu">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar top-bar ${isOpen ? "open" : ""}`}></div>
        <div className={`arrow-bar ${isOpen ? "open" : ""}`}>
          <div className={`bar middle-bar ${isOpen ? "open" : ""}`}></div>
        </div>
        <div className={`bar bottom-bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <div
        style={{ border: "1px solid black" }}
        className={`sidebar ${isOpen ? "open" : ""}`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default SidebarHamburger;
