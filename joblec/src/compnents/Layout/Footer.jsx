import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    
    <div className={classes.Footer}>
        <p class="classes.Footer__corp">&copy; 2022 Company, Inc</p>

        <ul className={classes.Footer__menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
    
  )
}

export default Footer