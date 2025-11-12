import React from 'react';
import '../../src/components/Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance and minimal loading times.' },
  { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security with end-to-end encryption and compliance.' },
  { icon: '📱', title: 'Responsive', description: 'Perfect experience across all devices and screen sizes.' },
  { icon: '🎨', title: 'Customizable', description: 'Fully customizable themes and components to match your brand.' },
  { icon: '🚀', title: 'Scalable', description: 'Grows with your business from startup to enterprise scale.' },
  { icon: '💬', title: 'Support', description: '24/7 customer support with dedicated success managers.' }
];

const Features: React.FC = () => {
  return (
    <section className="features" id="features" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#F7FAFC' }}>Why Choose Us?</h2>
          <p className="section-description" style={{ color: '#F7FAFC' }}>
            Discover the features that make our platform the best choice for your needs.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ backgroundColor: '#4A5568' }}>
              <div className="feature-icon" style={{ backgroundColor: '#F6E05E' }}>
                {feature.icon}
              </div>
              <h3 className="feature-title" style={{ color: '#F7FAFC' }}>{feature.title}</h3>
              <p className="feature-description" style={{ color: '#F7FAFC' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;