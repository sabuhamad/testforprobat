import React from 'react'
import './Hero.css'
import GetStartedButton from './GetStartedButton'

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Ship Apps
              <span className="gradient-text"> 10x Faster</span>
            </h1>
            <p className="hero-description">
              Stop wrestling with complex deployments and slow builds. Our platform 
              handles the infrastructure so you can focus on what matters - building great products.
            </p>
            <div className="hero-actions">
              <GetStartedButton label="Build Something Now" large />
              <button className="btn btn-outline btn-large">
                See How It Works
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10x</span>
                <span className="stat-label">Faster Deployment</span>
              </div>
              <div className="stat">
                <span className="stat-number">Zero</span>
                <span className="stat-label">Config Required</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Companies Trust Us</span>
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