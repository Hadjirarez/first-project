
import './NavBar.css'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


function NavBar({ scrollToSection, refs }) {
   const [menuOpen, setMenuOpen] = useState(false);

   
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);}

  return (
    <nav className="navbar">
      <div className="nav-container">

        <img id="logo" src="src/assets/GPT-3.png" alt="logo" />

  <div className="menu" onClick={toggleMenu}>
          <IoMenu size={28} /> 
        </div>
       
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(refs.homeRef);
                setMenuOpen(false); 
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(refs.whatisgptRef);
                setMenuOpen(false); 
              }}
            >
              What is GPT-3
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(refs.openaiRef);
                setMenuOpen(false); 
              }}
            >
              OpenAI
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(refs.casestudiesRef);
                setMenuOpen(false); 
              }}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(refs.libraryRef);
                setMenuOpen(false); 
              }}
            >
              Library
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
       