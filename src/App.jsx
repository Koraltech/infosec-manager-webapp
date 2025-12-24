import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert(`Thank you ${formData.name}!`); setFormData({ name: '', email: '', company: '' }); };
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">InfoSec Manager</div>
          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#services">Capabilities</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Unified Risk Intelligence for Modern Enterprise Security</h1>
            <p className="hero-subtitle">The Information Security Manager Product is a high-value cybersecurity aggregation platform targeting mid-to-large enterprises.</p>
            <p className="hero-subtitle">By integrating with leading Vulnerability Management, Antivirus, and DLP providers, consolidate risk intelligence into one dashboard.</p>
            <div className="hero-actions">
              <button className="btn btn-primary">Request Demo</button>
              <button className="btn btn-secondary">View Dashboard</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Security dashboard" />
          </div>
        </div>
      </header>
      <section id="overview" className="section">
        <h2>Why Security Aggregation Matters</h2>
        <div className="cards-3">
          <div className="card">
            <h3>Consolidated Risk View</h3>
            <p>Ingest risk data from multiple vendors into one cohesive risk profile.</p>
          </div>
          <div className="card">
            <h3>Faster Response</h3>
            <p>Reduce MTTD and MTTR through cross-tool correlation.</p>
          </div>
          <div className="card">
            <h3>ROI on Stack</h3>
            <p>Unlock value from existing tools without replacements.</p>
          </div>
        </div>
      </section>
      <footer id="contact" className="footer">
        <h2>Ready to consolidate security intelligence?</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          <button type="submit" className="btn btn-primary">Schedule Consultation</button>
        </form>
        <div className="footer-meta">
          <span>© 2025 InfoSec Manager Platform</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
