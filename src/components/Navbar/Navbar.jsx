import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="nav__logo"
        />
        <img
          onClick={() => navigate("/profile")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqW8JKlxECfgKG_-OJQKl3oC3FLUg-HeGpzzPN6k5p-GYkC19U2bLPL0xzw8ds-MPTEU&usqp=CAU"
          alt="profile"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
