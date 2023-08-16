import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faBook,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="#about">
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a href="#skills">
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a href="#contact">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </nav>
  )
}

export default Nav
