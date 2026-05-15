import { assets } from '../../assets/assets.js'
import styles from './Footer.module.css'
import React from 'react'

function Footer() {
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div    className={styles.footer}  id='footer'>
      
    <div  className={styles.footerContent} >
        <div className={styles.footerContentLeft}>
            <img src={assets.logo}alt="" width={200} height={200} />
            <p>BhookExpress is a fun and fast online food delivery platform designed to satisfy cravings with quick doorstep delivery. With a vibrant and youthful brand identity, BhookExpress offers a seamless experience for browsing, ordering, and tracking delicious meals anytime, anywhere.</p>

             <div className={styles.footerSocialIcons}>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>
        
        <div className={styles.footerContentCenter}>
            <h2>Company</h2>
            <ul>
            <li><button onClick={() => handleNavigation('tab')} className={styles.linkButton}>Home</button></li>
            <li><button onClick={() => handleNavigation('about-us')} className={styles.linkButton}>About us</button></li>
            <li><button onClick={() => handleNavigation('how-it-works')} className={styles.linkButton}>How It Works</button></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
        </div> 

        <div className={styles.footerContentRight}>
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+91-9142111111</li>
                <li>contact@bhookexpress.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className={styles.footerCopyright}>
      
      &copy; 2026 BhookExpress. All rights reserved.
    </p>
     <a href="http://arnavsingh008.netlify.app/" target="_blank">
          Made by
          Arnav Singh
        </a>
    </div>
  )    
}

export default Footer  
