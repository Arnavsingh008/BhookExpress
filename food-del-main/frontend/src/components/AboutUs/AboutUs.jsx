import React from 'react'
import styles from './AboutUs.module.css'

function AboutUs() {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Partner Restaurants' },
    { number: '15min', label: 'Avg Delivery Time' },
    { number: '99%', label: 'Order Accuracy' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Customer',
      feedback: 'BhookExpress made ordering food so convenient! Fast delivery and always hot meals.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Raj Patel',
      role: 'Restaurant Owner',
      feedback: 'Great platform for our restaurant. More orders, better visibility. Highly recommended!',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Emma Davis',
      role: 'Customer',
      feedback: 'Love the variety and the special discounts. BhookExpress is my go-to app!',
      rating: '⭐⭐⭐⭐⭐'
    }
  ]

  const handleStartOrdering = () => {
    const menuElement = document.getElementById('explore-menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.aboutUs} id='about-us'>
      <div className={styles.header}>
        <h2>About <span className={styles.brandName}>BhookExpress</span></h2>
        <p className={styles.tagline}>Connecting Hunger with Happiness</p>
      </div>

      {/* Story Section */}
      <div className={styles.storySection}>
        <div className={styles.storyText}>
          <h3>Our Story</h3>
          <p>
            Born from a passion to solve the food delivery challenge, BhookExpress brings restaurants and food lovers together on a single platform. We're committed to making every delivery an experience, not just a transaction.
          </p>
          <p>
            Since our launch, we've served thousands of customers and partnered with hundreds of restaurants, setting new standards for quality, speed, and service in the food delivery industry.
          </p>
        </div>
        <div className={styles.storyImage}>
          <div className={styles.heroEmoji}>🚀</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <h3>By The Numbers</h3>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h3>What Our Community Says</h3>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>{testimonial.rating}</div>
              <p className={styles.feedback}>"{testimonial.feedback}"</p>
              <div className={styles.author}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h3>Ready to Taste the Difference?</h3>
        <p>Join thousands of happy customers enjoying delicious food delivered fast</p>
        <button className={styles.ctaButton} onClick={handleStartOrdering}>Start Ordering Now →</button>
      </div>
    </div>
  )
}

export default AboutUs

