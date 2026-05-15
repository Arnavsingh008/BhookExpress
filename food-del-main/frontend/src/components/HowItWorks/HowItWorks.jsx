import React from 'react'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Browse Menu',
      description: 'Explore our wide variety of delicious food options'
    },
    {
      step: '02',
      title: 'Select Items',
      description: 'Pick your favorite dishes and add to cart'
    },
    {
      step: '03',
      title: 'Place Order',
      description: 'Review and place your order with secure payment'
    },
    {
      step: '04',
      title: 'Enjoy Delivery',
      description: 'Receive your food fresh and hot at your doorstep'
    }
  ]

  return (
    <div className={styles.howItWorks} id="how-it-works">
      <h2>How It Works</h2>
      <p className={styles.subtitle}>Ordering food has never been easier - just 4 simple steps</p>
      
      <div className={styles.stepsContainer}>
        {steps.map((item, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepNumber}>{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {index < steps.length - 1 && <div className={styles.arrow}>→</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
