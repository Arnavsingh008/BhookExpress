import React   from 'react';
import styles from './Hero.module.css';

function Hero() {
  const handleViewMenu = () => {
    const menuElement = document.getElementById('explore-menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.hero} id="tab" >
      <div className={styles.header_contents}>
        <h2>Order your favourite food online</h2>
        <p>Discover a world of flavors delivered to your doorstep. From your favorite restaurants to hidden gems, find everything you crave in one place.</p>
        <button onClick={handleViewMenu}>🔍 Explore Menu</button>
      </div>
    </div> 
  );  
}

export default Hero;
