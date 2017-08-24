import React from 'react'
import style from './nav.style'
import {
    Link,
    NavLink
  } from 'react-router-dom'

const Nav = () => (
<aside  className="w-20">
    <h1>BOLT</h1>
    <nav className=""> 
        <ul>
            <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/form" activeClassName="selected">Formulário</NavLink></li>
            <li><NavLink to="/botoes" activeClassName="selected">Botões</NavLink></li>
            <li><NavLink to="/grid" activeClassName="selected">Grids</NavLink></li>
            <li><NavLink to="/tabelas" activeClassName="selected">Tabelas</NavLink></li>
            <li><NavLink to="/lista" activeClassName="selected">Listas</NavLink></li>
        </ul>
    </nav>
</aside>
)

export default Nav;