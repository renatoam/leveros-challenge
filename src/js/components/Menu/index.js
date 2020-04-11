import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { HomeIcon } from '../Images';

export default function Menu() {

  const [menu, setMenu] = useState(["menu"]);
  let classes = [...menu];
  let className = classes.join(" ").toString();

  function handleMenu() {

    const idx = classes.indexOf('active');
    
    if (idx > 0) {
      
      classes = classes.filter(cl => cl !== 'active');
      setMenu(classes);

    } else {

      classes.push('active');
      setMenu(classes);

    }

  }

  return (
    <section className={className}>
      <section className="menu__wrapper wrapper">
        <section className="menu__group">
          <input type="checkbox" id="menuToggle"/>
          <label htmlFor="menuToggle" className="menu__toggle button" onClick={() => handleMenu()}>
            <span></span>
          </label>
          <Link to="/">
            <img src={HomeIcon} alt="Home"/>
          </Link>
        </section>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/characters" className="menu__link">CHARACTERS</Link>
          </li>
          <li className="menu__item">
            <Link to="/locations" className="menu__link">LOCATIONS</Link>
          </li>
          <li className="menu__item">
            <Link to="/episodes" className="menu__link">EPISODES</Link>
          </li>
          <li className="menu__item">
            <Link to="/bookmarks" className="menu__link">BOOKMARKS</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">HOME</Link>
          </li>
        </ul>
      </section>
    </section>
  )
}