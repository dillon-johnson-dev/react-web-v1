import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BiCode } from 'react-icons/bi'
import { MdDesignServices } from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Embark on a Quest</h5>
      <h2>Uncover My Secrets</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCode className="about__icon" />
              <h5>Software Developer</h5>
              <small>Novice: &lt; 12 months</small>
            </article>

            <article className="about__card">
              <MdDesignServices className="about__icon" />
              <h5>Graphic Designer</h5>
              <small>Experienced: 6+ years</small>
            </article>
          </div>

          <p>
            My name is Dillon and I am a passionate problem solver that uses my
            creative and development skills to find innovative solutions. When I
            am not coding you may find me raising my 1 year old to love music
            and anime as much as I do.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
