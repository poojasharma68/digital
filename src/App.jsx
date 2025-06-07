"use client"

import { useState, useEffect } from "react"
import "./styles.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const clients = [
    { name: "Microsoft", logo: "/images/client-1.png", industry: "Technology" },
    { name: "Google", logo: "/images/client-2.png", industry: "Technology" },
    { name: "Amazon", logo: "/images/client-3.png", industry: "E-commerce" },
    { name: "Apple", logo: "/images/client-4.png", industry: "Technology" },
    { name: "Netflix", logo: "/images/client-5.png", industry: "Entertainment" },
    { name: "Spotify", logo: "/images/client-6.png", industry: "Music Streaming" },
  ]

  const testimonials = [
    {
      quote:
        "Digital Enclave transformed our cybersecurity infrastructure completely. Their expertise in threat detection and prevention has saved us millions in potential losses.",
      author: "Sarah Johnson",
      position: "Chief Technology Officer",
      company: "TechCorp Industries",
      rating: 5,
    },
    {
      quote:
        "The cloud migration project was executed flawlessly. Zero downtime and 40% cost reduction in our first year. Exceptional service and support throughout.",
      author: "Michael Chen",
      position: "IT Director",
      company: "Global Innovations Ltd",
      rating: 5,
    },
    {
      quote:
        "Their AI-powered analytics platform gave us insights we never knew existed. Our decision-making process is now data-driven and incredibly efficient.",
      author: "Emily Rodriguez",
      position: "Chief Data Officer",
      company: "DataFlow Systems",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: "🏢" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" },
    { number: "15+", label: "Years Experience", icon: "🏆" },
  ]

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="logo">
            <div className="logo-icon">🔒</div>
            <h1>Digital Enclave</h1>
          </div>
          <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <a href="#home" className={activeSection === "home" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className={activeSection === "products" ? "active" : ""}>
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className={activeSection === "services" ? "active" : ""}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#clients" className={activeSection === "clients" ? "active" : ""}>
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#support" className={activeSection === "support" ? "active" : ""}>
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-background">
          <img src="/images/hero-bg.jpg" alt="Digital Technology Background" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🚀 Trusted by 500+ Enterprise Clients</span>
            </div>
            <h1>Secure Digital Solutions for Tomorrow's Challenges</h1>
            <p>
              Empowering businesses with cutting-edge cybersecurity, cloud infrastructure, and AI-powered analytics.
              Transform your digital landscape with enterprise-grade solutions.
            </p>
            <div className="cta-buttons">
              <button className="btn primary">
                <span>Start Your Journey</span>
                <i className="arrow">→</i>
              </button>
              <button className="btn secondary">
                <span>📞 Schedule Demo</span>
              </button>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Solutions</span>
            <h2>Enterprise-Grade Products</h2>
            <p>Comprehensive digital solutions designed for modern enterprises</p>
          </div>
          <div className="product-cards">
            <div className="card featured">
              <div className="card-header">
                <div className="card-icon">🛡️</div>
                <span className="card-badge">Most Popular</span>
              </div>
              <h3>EnclaveSecurity Pro</h3>
              <p>
                Advanced threat detection, real-time monitoring, and automated response systems to protect your digital
                assets.
              </p>
              <ul className="feature-list">
                <li>✓ AI-Powered Threat Detection</li>
                <li>✓ 24/7 Security Monitoring</li>
                <li>✓ Automated Incident Response</li>
                <li>✓ Compliance Management</li>
              </ul>
              <div className="card-footer">
                <span className="price">Starting at $299/month</span>
                <a href="#" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-icon">☁️</div>
              </div>
              <h3>EnclaveCloud Enterprise</h3>
              <p>Scalable cloud infrastructure with enterprise-grade security and performance optimization.</p>
              <ul className="feature-list">
                <li>✓ Auto-Scaling Infrastructure</li>
                <li>✓ Global CDN Network</li>
                <li>✓ 99.9% Uptime SLA</li>
                <li>✓ Advanced Analytics</li>
              </ul>
              <div className="card-footer">
                <span className="price">Starting at $199/month</span>
                <a href="#" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-icon">📊</div>
              </div>
              <h3>EnclaveAnalytics AI</h3>
              <p>Data-driven insights powered by machine learning to optimize your business operations.</p>
              <ul className="feature-list">
                <li>✓ Predictive Analytics</li>
                <li>✓ Real-time Dashboards</li>
                <li>✓ Custom Reporting</li>
                <li>✓ API Integration</li>
              </ul>
              <div className="card-footer">
                <span className="price">Starting at $399/month</span>
                <a href="#" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Comprehensive Digital Services</h2>
            <p>End-to-end solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🔄</div>
              <h3>Digital Transformation</h3>
              <p>Modernize your business processes with cutting-edge technology and strategic digital initiatives.</p>
              <div className="service-features">
                <span>Process Automation</span>
                <span>Legacy System Migration</span>
                <span>Digital Strategy</span>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🔐</div>
              <h3>Cybersecurity</h3>
              <p>Comprehensive security solutions to protect your business from evolving cyber threats.</p>
              <div className="service-features">
                <span>Penetration Testing</span>
                <span>Security Audits</span>
                <span>Incident Response</span>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">☁️</div>
              <h3>Cloud Migration</h3>
              <p>Seamless transition to cloud infrastructure with zero downtime and optimized performance.</p>
              <div className="service-features">
                <span>AWS/Azure/GCP</span>
                <span>Hybrid Solutions</span>
                <span>Cost Optimization</span>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">💻</div>
              <h3>Software Development</h3>
              <p>Custom software solutions built with modern technologies and best practices.</p>
              <div className="service-features">
                <span>Web Applications</span>
                <span>Mobile Apps</span>
                <span>API Development</span>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">🎯</div>
              <h3>IT Consulting</h3>
              <p>Strategic technology guidance to align IT initiatives with business objectives.</p>
              <div className="service-features">
                <span>Technology Roadmap</span>
                <span>Architecture Design</span>
                <span>Vendor Selection</span>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">⚙️</div>
              <h3>Managed Services</h3>
              <p>Proactive IT management to ensure optimal performance and minimal downtime.</p>
              <div className="service-features">
                <span>24/7 Monitoring</span>
                <span>Maintenance</span>
                <span>Help Desk Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">About Digital Enclave</span>
            <h2>Your Trusted Technology Partner</h2>
            <p>Leading the digital transformation journey since 2008</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-story">
                <h3>Our Story</h3>
                <p>
                  Founded in 2008 by a team of cybersecurity experts and cloud architects, Digital Enclave has grown
                  from a boutique consultancy to a leading provider of enterprise digital solutions. We've helped over
                  500 organizations across 40+ countries transform their digital infrastructure.
                </p>

                <h3>Our Mission</h3>
                <p>
                  To empower businesses with secure, scalable, and innovative digital solutions that drive growth,
                  enhance security, and optimize operations in an increasingly connected world.
                </p>

                <div className="certifications">
                  <h4>Certifications & Partnerships</h4>
                  <div className="cert-badges">
                    <span className="cert-badge">AWS Advanced Partner</span>
                    <span className="cert-badge">Microsoft Gold Partner</span>
                    <span className="cert-badge">ISO 27001 Certified</span>
                    <span className="cert-badge">SOC 2 Type II</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/team-photo.jpg" alt="Digital Enclave Team" />
              <div className="image-overlay">
                <div className="team-stats">
                  <div className="team-stat">
                    <span className="number">150+</span>
                    <span className="label">Expert Engineers</span>
                  </div>
                  <div className="team-stat">
                    <span className="number">25+</span>
                    <span className="label">Countries Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Clients</span>
            <h2>Trusted by Industry Leaders</h2>
            <p>Partnering with Fortune 500 companies and innovative startups worldwide</p>
          </div>

          <div className="client-showcase">
            <div className="client-logos">
              {clients.map((client, index) => (
                <div key={index} className="client-logo">
                  <img src={client.logo || "/placeholder.svg"} alt={`${client.name} Logo`} />
                  <div className="client-info">
                    <span className="client-name">{client.name}</span>
                    <span className="client-industry">{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials">
            <h3>What Our Clients Say</h3>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p>"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <span className="name">{testimonial.author}</span>
                      <span className="position">{testimonial.position}</span>
                      <span className="company">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals</p>
          </div>
          <div className="contact-container">
            <div className="contact-form">
              <div className="form-header">
                <h3>Send us a message</h3>
                <p>We'll get back to you within 24 hours</p>
              </div>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud">Cloud Migration</option>
                    <option value="analytics">Analytics & AI</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="development">Software Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="btn primary full-width">
                  Send Message
                  <i className="arrow">→</i>
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Get in touch</h3>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h4>Headquarters</h4>
                      <p>
                        123 Innovation Drive
                        <br />
                        Tech District, San Francisco
                        <br />
                        CA 94105, United States
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <p>
                        +1 (555) 123-4567
                        <br />
                        Mon-Fri 9AM-6PM PST
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <p>
                        hello@digitalenclave.com
                        <br />
                        support@digitalenclave.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <h3>Office Hours</h3>
                <div className="office-hours">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="emergency-note">
                    <p>🚨 24/7 Emergency Support Available for Enterprise Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="support">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Support Center</span>
            <h2>We're Here to Help</h2>
            <p>Comprehensive support resources and expert assistance</p>
          </div>
          <div className="support-options">
            <div className="support-card">
              <div className="card-icon">📚</div>
              <h3>Knowledge Base</h3>
              <p>Comprehensive documentation, tutorials, and best practices for all our products and services</p>
              <div className="support-stats">
                <span>500+ Articles</span>
                <span>Video Tutorials</span>
                <span>API Documentation</span>
              </div>
              <a href="#" className="btn secondary">
                Browse Documentation
              </a>
            </div>
            <div className="support-card featured">
              <div className="card-icon">🎫</div>
              <h3>Technical Support</h3>
              <p>Direct access to our expert support team for technical assistance and troubleshooting</p>
              <div className="support-stats">
                <span>{"< 2hr Response"}</span>
                <span>24/7 Enterprise</span>
                <span>Expert Engineers</span>
              </div>
              <a href="#" className="btn primary">
                Open Support Ticket
              </a>
            </div>
            <div className="support-card">
              <div className="card-icon">💬</div>
              <h3>Community Forum</h3>
              <p>Connect with other users, share experiences, and get answers from the community</p>
              <div className="support-stats">
                <span>10k+ Members</span>
                <span>Active Discussions</span>
                <span>Expert Moderators</span>
              </div>
              <a href="#" className="btn secondary">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-icon">🔒</div>
                  <h2>Digital Enclave</h2>
                </div>
                <p>
                  Empowering businesses with secure, innovative digital solutions since 2008. Your trusted partner in
                  digital transformation.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link twitter" aria-label="Twitter">
                    <span>𝕏</span>
                  </a>
                  <a href="#" className="social-link github" aria-label="GitHub">
                    <span>⚡</span>
                  </a>
                  <a href="#" className="social-link youtube" aria-label="YouTube">
                    <span>▶</span>
                  </a>
                </div>
              </div>

              <div className="footer-links">
                <div className="link-group">
                  <h4>Solutions</h4>
                  <ul>
                    <li>
                      <a href="#products">Cybersecurity</a>
                    </li>
                    <li>
                      <a href="#products">Cloud Services</a>
                    </li>
                    <li>
                      <a href="#products">Analytics & AI</a>
                    </li>
                    <li>
                      <a href="#services">Digital Transformation</a>
                    </li>
                    <li>
                      <a href="#services">IT Consulting</a>
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#clients">Case Studies</a>
                    </li>
                    <li>
                      <a href="/careers">Careers</a>
                    </li>
                    <li>
                      <a href="/news">News & Press</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Resources</h4>
                  <ul>
                    <li>
                      <a href="#support">Documentation</a>
                    </li>
                    <li>
                      <a href="#support">API Reference</a>
                    </li>
                    <li>
                      <a href="/whitepapers">Whitepapers</a>
                    </li>
                    <li>
                      <a href="/webinars">Webinars</a>
                    </li>
                    <li>
                      <a href="/security">Security Center</a>
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="#support">Help Center</a>
                    </li>
                    <li>
                      <a href="/status">System Status</a>
                    </li>
                    <li>
                      <a href="/community">Community</a>
                    </li>
                    <li>
                      <a href="/partners">Partner Program</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Get the latest insights on cybersecurity, cloud technology, and digital transformation.</p>
                <form className="newsletter-form">
                  <div className="input-group">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit" className="btn primary">
                      Subscribe
                    </button>
                  </div>
                </form>
                <div className="newsletter-benefits">
                  <div className="benefit">
                    <span className="benefit-icon">📧</span>
                    <span>Weekly insights</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">🎯</span>
                    <span>Industry trends</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">🔒</span>
                    <span>Security updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <p>&copy; {new Date().getFullYear()} Digital Enclave. All rights reserved.</p>
                <div className="legal-links">
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="/cookies">Cookie Policy</a>
                  <a href="/gdpr">GDPR Compliance</a>
                </div>
              </div>
              <div className="footer-certifications">
                <div className="cert-badges">
                  <span className="cert-badge">SOC 2 Type II</span>
                  <span className="cert-badge">ISO 27001</span>
                  <span className="cert-badge">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
