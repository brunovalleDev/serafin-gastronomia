import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__navbar">
      <h1 className="app__navbar-logo">Serafin</h1>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">home</a></li>
        <li className="p__opensans"><a href="#sobre">sobre</a></li>
        <li className="p__opensans"><a href="#premios">prêmios</a></li>
        <li className="p__opensans"><a href="#contato">contato</a></li>
        <li className="p__opensans"><a href="#menu">menu</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#" className="p__opensans">log in / registration</a>
        <div />
        <a href="#" className="p__opensans">book table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} color="#fff" onClick={() => setToggleMenu(true)} className="hamburger-icon" />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu class="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__cormorant"><a href="#home" onClick={() => setToggleMenu(false)}>home</a></li>
              <li className="p__cormorant"><a href="#sobre" onClick={() => setToggleMenu(false)}>sobre</a></li>
              <li className="p__cormorant"><a href="#premios" onClick={() => setToggleMenu(false)}>prêmios</a></li>
              <li className="p__cormorant"><a href="#contato" onClick={() => setToggleMenu(false)}>contato</a></li>
              <li className="p__cormorant"><a href="#menu" onClick={() => setToggleMenu(false)}>menu</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
