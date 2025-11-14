import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Build Something
              <span className="gradient-text"> Amazing</span>
            </h1>
            <p className="hero-description">
              Create stunning websites and applications with our modern tools and 
              cutting-edge technology. Join thousands of developers who trust our platform.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">
                Get Started Free
              </button>
              <button className="btn btn-outline btn-large">
                Watch Demo
              </button>
            </div>
            <div className="hero-stats" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero