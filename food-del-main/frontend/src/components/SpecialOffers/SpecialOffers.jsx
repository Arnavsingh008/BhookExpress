import React from 'react'
import styles from './SpecialOffers.module.css'

function SpecialOffers() {
  const offers = [
    {
      discount: '20%',
      title: 'First Order',
      description: '20% discount on your first order - limited to new customers'
    },
    {
      discount: 'Free',
      title: 'Free Delivery',
      description: 'Get free delivery on orders above ₹500'
    },
    {
      discount: '50%',
      title: 'Weekend Special',
      description: 'Get up to 50% off on selected items every weekend'
    }
  ]

  return (
    <div className={styles.specialOffers}>
      <h2>Special Offers & Deals</h2>
      <p className={styles.subtitle}>Grab these amazing offers before they're gone</p>
      
      <div className={styles.offersGrid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerCard}>
            <div className={styles.discountBadge}>{offer.discount}</div>
            <h3>{offer.title}</h3>
            <p className={styles.description}>{offer.description}</p>
            <button className={styles.ctaButton}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialOffers
