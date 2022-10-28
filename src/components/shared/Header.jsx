import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'
const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
        <h1 className="header__title">
            <Link className='header__link' to='/'>e-commerce</Link>
        </h1>
            <ul className='header__list'>
                <li className='header__item'>
                    <NavLink className='header__navlink' to='/login'><i className="fa-solid fa-user"></i></NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__navlink' to='/purchases'><i className="fa-solid fa-box-archive"></i></NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__navlink' to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header