import React from "react";
import { withExperiment } from "../../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../../probat/index";
import './Hero.css';

const __PROBAT_KEY__ = "src/components/Hero.tsx";

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
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
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

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(Hero as any, { proposalId: meta.proposalId, registry: reg })
    : Hero;
})();
