import React from 'react'
import { GrLinkedin, GrGithub } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/dillon-johnson-95b7b210a/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin />
      </a>
      <a
        href="https://github.com/dillon-johnson-dev"
        target="_blank"
        rel="noreferrer"
      >
        <GrGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
