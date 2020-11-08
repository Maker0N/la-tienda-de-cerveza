import React from 'react'
import headerStyle from './styles/header.module.scss'

const { header, logo, nav, button, div } = headerStyle

const Header = () => {
  return (
    <header className={header}>
      <div className={logo}>Cervecería "Eldar, hijos e cuñado"</div>
      <nav className={nav}>
        <button className={button}>a</button>
        <button className={button}>b</button>
        <button className={button}>c</button>
      </nav>
      <div className={div}></div>
      <div className={div}></div>
    </header>
  );
}

export default Header