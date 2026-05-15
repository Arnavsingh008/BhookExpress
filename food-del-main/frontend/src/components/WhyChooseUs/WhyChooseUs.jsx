import React from 'react'
import styles from './WhyChooseUs.module.css'

function WhyChooseUs() {
  const features = [
    {
      icon: '⚡',
      title: 'Super Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less'
    },
    {
      icon: '🍽️',
      title: 'Variety of Cuisines',
      description: 'Choose from a diverse menu of delicious dishes'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Enjoy affordable prices with special discounts'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Multiple payment options with secure transactions'
    },
    {
      icon: '👨‍🍳',
      title: 'Quality Food',
      description: 'Fresh ingredients prepared by experienced chefs'
    },
    {
      icon: '📱',
      title: 'Easy to Use',
      description: 'User-friendly interface for seamless ordering'
    }
  ]

  return (
    <div className={styles.whyChooseUs}>
      <h2>Why Choose <span className={styles.brandName}>BhookExpress</span>?</h2>
      <p className={styles.subtitle}>Experience the best food delivery service with these amazing features</p>
      
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
