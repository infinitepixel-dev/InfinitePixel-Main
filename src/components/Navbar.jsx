import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import ReactLogo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollBarWidthRef = useRef(0);

  const textRef = useRef(null);

  const menuOverlayRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuButtonBgRef = useRef(null);
  const menuItemsRef = useRef([]);

  // 💡 Cache scrollbar width once on mount
  useEffect(() => {
    scrollBarWidthRef.current =
      window.innerWidth - document.documentElement.clientWidth;
  }, []);

  // ✨ Animate menu items in when menu opens
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => {
    const opening = !isOpen;
    const container = document.getElementById("app-container");

    if (opening) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      scrollBarWidthRef.current = scrollBarWidth;

      if (container) container.style.marginRight = `${scrollBarWidth}px`;
      if (menuOverlayRef.current)
        menuOverlayRef.current.style.paddingRight = `${scrollBarWidth}px`;

      document.body.classList.add("overflow-hidden");
      animateButtonBackground();
    } else {
      document.body.classList.remove("overflow-hidden");
      if (container) container.style.marginRight = "";
      if (menuOverlayRef.current)
        menuOverlayRef.current.style.paddingRight = "";
      gsap.killTweensOf(menuButtonBgRef.current);
      gsap.to(menuButtonBgRef.current, { backgroundColor: "transparent" });
    }

    // console.log("Scrollbar width:", scrollBarWidthRef.current);
    // console.log("Container marginRight:", container?.style.marginRight);

    setIsOpen(opening); // 🧠 Now update state
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
    const container = document.getElementById("app-container");
    if (container) container.style.marginRight = "";
  };

  const animateButtonBackground = () => {
    gsap.fromTo(
      menuButtonBgRef.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#1a202c",
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  };

  // Optional styling transition for text on menu toggle
  useEffect(() => {
    const textElement = textRef.current;
    const menuButton = menuButtonRef.current;

    if (textElement) {
      gsap.to(textElement, {
        color: "#f1f5f9", // slate-100
        duration: 0.3,
        ease: "power1.inOut",
      });
    }

    if (menuButton) {
      gsap.to(menuButton, {
        color: "#f1f5f9", // slate-100
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  return (
    <nav className="top-0 left-0 z-50 fixed w-full">
      {/* Gradient Background Overlay */}
      <div className="z-0 absolute inset-0 bg-gradient-to-b from-slate-800 to-red-slate-800/0 h-full pointer-events-none"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-between items-center bg-transparent p-4 w-full transition-colors duration-300">
        <div className="flex items-center">
          <img src={ReactLogo} alt="React Logo" className="w-15 h-8" />
        </div>

        <div className="flex items-center ml-auto">
          <button
            ref={textRef}
            className="hidden md:block z-20 mr-4 font-semibold text-slate-100 text-lg transition"
            onClick={() => {
              const contactForm = document.getElementById("contact-form");
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: "smooth" });
              } else {
                console.error("Contact form not found!");
              }
            }}
          >
            Let&apos;s Create Something Together
          </button>

          {/* Menu Toggle */}
          <button
            onClick={toggleMenu}
            ref={menuButtonRef}
            className="z-[999] focus:outline-none text-2xl transition-transform duration-300 transform"
            aria-label="Menu button"
          >
            <div
              ref={menuButtonBgRef}
              className={`transition-transform duration-300 p-2 rounded-full ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <FaTimes className="text-slate-100" />
              ) : (
                <FaBars className="text-slate-100" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        ref={menuOverlayRef}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black`}
      >
        <ul
          className="relative space-y-10 text-white text-6xl transition-transform transform"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="-top-10 left-0 absolute text-2xl">Menu</li>
          {["Our Projects", "Contact Us"].map((item, index) => (
            <li
              key={item}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={closeMenu}
              className="hover:underline cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
