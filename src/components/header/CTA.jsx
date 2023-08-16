import React from 'react'
import CV from '../../assets/cv.pdf'
import Portfolio from '../../assets/designPortfolio.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        My CV
      </a>
      <a href={Portfolio} download className="btn">
        Design Portfolio
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  )
}

export default CTA
