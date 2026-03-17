import React from "react";
import { Experiment } from "@probat/react";
import './Features.css';

interface Feature {
  icon: string
  title: string
  description: string
}

// Control component (original version)
const FeaturesControl: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance and minimal loading times.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience across all devices and screen sizes.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable themes and components to match your brand.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise scale.'
    },
    {
      icon: '💬',
      title: 'Support',
      description: '24/7 customer support with dedicated success managers.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            Discover the features that make our platform the best choice for your needs.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Variant component (V3 version)
const FeaturesVariant: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Load your data in under 2 seconds with optimized performance.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Keep your data protected with bank-level encryption and compliance.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Access your workspace seamlessly from any device or screen size.'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Match your brand perfectly with fully customizable themes and components.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Scale effortlessly from 10 to 10,000 users without performance loss.'
    },
    {
      icon: '💬',
      title: 'Support',
      description: 'Get help anytime with 24/7 support and dedicated success managers.'
    }
  ]

  const handleFeatureClick = (featureTitle: string) => {
    // Track feature card clicks for analytics
    console.log('Feature clicked:', featureTitle)
  }

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-description">
            Achieve more with powerful features designed to save you time and boost productivity.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Wrapper component with Experiment
const Features: React.FC = () => {
  return (
    <Experiment
      id="exp_Features_20260317_f8a2c1d3"
      control={<FeaturesControl />}
      variants={{ V3: <FeaturesVariant /> }}
    />
  )
}

export default Features;
