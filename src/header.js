import React from 'react'
import { Link } from 'react-router-dom'
import headerStyle from './styles/header.module.scss'

const { header, logo, nav, button, div } = headerStyle

const Header = () => {
  return (
    <header className={header}>
      <Link className={logo} to="/">
        Cervecería "Eldar, hijos e cuñado"
      </Link>
      <nav className={nav}>
        <button className={button}>
          <Link to="/">Catalogo de producto</Link>
        </button>
        <button className={button}>
          <Link to="/">Sobre nosotros</Link>
        </button>
        <button className={button}>c</button>
      </nav>
      <div className={div}></div>
      <div className={div}>
        <div>
          <Link to="/cart">Mi cesta</Link>
        </div>
        <div>
          <Link to="/order">Mis ordenes</Link>
        </div>
      </div>
    </header>
  );
}

export default Header