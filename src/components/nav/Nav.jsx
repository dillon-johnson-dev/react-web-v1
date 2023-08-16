import React from 'react'
import './nav.css'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstoreAdd,
} from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <BiBookAlt />
      </a>
      <a href="#projects">
        <AiOutlineAppstoreAdd />
      </a>
    </nav>
  )
}

export default Nav
