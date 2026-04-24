import React, { useState } from 'react';
import { Menu, X, Mail, MapPin, Phone, BookOpen, Users, Award, Heart, ChevronRight } from 'lucide-react';

export default function GratitudeSchoolWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Staff', id: 'staff' },
    { name: 'Admissions', id: 'admissions' },
    { name: 'Contact', id: 'contact' },
  ];

  const staff = [
    {
      name: 'Banseka Terence',
      role: 'Head Teacher',
      credentials: 'CAPIEM Holder',
      experience: '9 years of experience',
      specialty: 'Art and Craft',
      email: 'banseka.terence@gratitudebnps.com',
    },
    {
      name: 'Ntaintain Natalia',
      role: 'Religious Head',
      credentials: 'CAPIEM Holder',
      experience: '10+ years of experience',
      specialty: 'Religious Development',
      email: 'ntaintain.natalia@gratitudebnps.com',
    },
    {
      name: 'Nlinwe Jasper',
      role: 'Communications Head',
      credentials: 'CAPIEM Holder',
      experience: '9+ years of experience',
      specialty: 'Photography and School Magazine',
      email: 'nlinwe.jasper@gratiduebnps.com',
    },
    {
      name: 'Diang Elizabeth',
      role: 'Assistant Head Teacher',
      credentials: 'CAPIEM Holder',
      experience: '9+ years of experience',
      specialty: 'Child Development',
      email: 'diang.elizabeth@gratitudebnps.com',
    },
  ];

  const programs = [
    {
      title: 'Nursery (Ages 3-5)',
      description: 'Pre-kindergarten care with play-based learning and early literacy',
      features: ['Bilingual instruction', 'Foundational skills', 'Creative play', 'Social development'],
    },
    {
      title: 'Primary (Ages 6-11)',
      description: 'Complete primary education preparing students for national examinations',
      features: ['Common Entrance prep', 'FSLC preparation', 'Modern teaching methods', 'Character development'],
    },
  ];

  const scrollToSection = (sectionId) => {
    setCurrentPage(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Header = () => (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <div className="logo-placeholder">
              <BookOpen className="logo-icon" />
            </div>
            <div className="school-name">
              <h1>Gratitude Bilingual</h1>
              <p>Nursery & Primary School</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );

  const HomePage = () => (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Est. 2006</span>
          </div>
          <h1 className="hero-title">
            Your Child's <span className="highlight">Home Away from Home</span>
          </h1>
          <p className="hero-subtitle">
            Providing affordable quality education in a nurturing, bilingual environment
            where children aged 3-11 thrive academically, morally, and spiritually.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('admissions')} className="btn-primary">
              Apply Now <ChevronRight size={20} />
            </button>
            <button onClick={() => scrollToSection('about')} className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <Heart className="stat-icon" />
            <h3>18+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" />
            <h3>Ages 3-11</h3>
            <p>Nursery & Primary</p>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" />
            <h3>CAPIEM</h3>
            <p>Certified Teachers</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Gratitude?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon green">
              <BookOpen size={32} />
            </div>
            <h3>Bilingual Education</h3>
            <p>English and French instruction preparing students for a multilingual future</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon blue">
              <Heart size={32} />
            </div>
            <h3>Religious Values</h3>
            <p>Character development rooted in faith and moral excellence</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon green">
              <Award size={32} />
            </div>
            <h3>Modern Facilities</h3>
            <p>State-of-the-art infrastructure creating a conducive learning environment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon blue">
              <Users size={32} />
            </div>
            <h3>Expert Staff</h3>
            <p>Highly qualified, experienced teachers who love children</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join Our Family?</h2>
          <p>Give your child the gift of quality bilingual education in a nurturing environment</p>
          <button onClick={() => scrollToSection('contact')} className="btn-primary large">
            Get in Touch Today
          </button>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="page-content">
      <section className="about-hero">
        <h1 className="page-title">About Gratitude</h1>
        <p className="page-subtitle">
          A legacy of educational excellence since 2006
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Located in the heart of Mile 3, Nkwen, Gratitude Bilingual Nursery & Primary School
            was created in September 2006 by our late founder, Mrs. Mani Margarat Kuo. What began
            as a vision to provide quality, affordable education has grown into a thriving institution
            that serves as a true home away from home for children aged 3-11.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Gratitude is a hub of educational innovation with its primary purpose to provide
            affordable quality education in a religious environment, as its contribution to the
            development of our children. We combine modern learning techniques of our "android
            generation" with conventional teaching methods to help build children who are mentally,
            physically, and morally sound to face the ever-growing expectations of a changing world.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Approach</h2>
          <p>
            We strive to give our students the best with very high disciplinary standards. Our
            state-of-the-art infrastructure and modern facilities provide a conducive arena of
            learning. This is why Gratitude is not just a place to study, but every child's
            <strong> "home away from home"</strong>.
          </p>
        </div>

        <div className="about-section">
          <h2>Academic Excellence</h2>
          <p>
            Gratitude Bilingual Nursery & Primary School offers pre-care (kindergarten) and primary
            school education which prepares children for the Common Entrance and First School Leaving
            Certificate Examinations (FSLC), setting them up for success in secondary school and beyond.
          </p>
        </div>

        <div className="director-section">
          <div className="director-card">
            <div className="director-avatar">CM</div>
            <div className="director-info">
              <h3>Catherine Mani</h3>
              <p className="director-title">Managing Director</p>
              <p className="director-bio">
                Leading Gratitude with dedication to continuing the legacy of educational
                excellence established by our founder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProgramsPage = () => (
    <div className="page-content">
      <section className="programs-hero">
        <h1 className="page-title">Our Programs</h1>
        <p className="page-subtitle">
          Comprehensive bilingual education from ages 3 to 11
        </p>
      </section>

      <section className="programs-content">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h2>{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <div className="program-features">
              {program.features.map((feature, idx) => (
                <div key={idx} className="program-feature">
                  <ChevronRight size={18} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="curriculum-section">
          <h2>Our Curriculum</h2>
          <div className="curriculum-grid">
            <div className="curriculum-item">
              <h3>Language Arts</h3>
              <p>English and French instruction for bilingual proficiency</p>
            </div>
            <div className="curriculum-item">
              <h3>Mathematics</h3>
              <p>Strong foundation in numeracy and problem-solving</p>
            </div>
            <div className="curriculum-item">
              <h3>Sciences</h3>
              <p>Hands-on exploration of the natural world</p>
            </div>
            <div className="curriculum-item">
              <h3>Religious Education</h3>
              <p>Moral and spiritual development</p>
            </div>
            <div className="curriculum-item">
              <h3>Arts & Crafts</h3>
              <p>Creative expression and fine motor skills</p>
            </div>
            <div className="curriculum-item">
              <h3>Physical Education</h3>
              <p>Healthy habits and teamwork</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const StaffPage = () => (
    <div className="page-content">
      <section className="staff-hero">
        <h1 className="page-title">Our Staff</h1>
        <p className="page-subtitle">
          Highly qualified, experienced & children-loving teachers
        </p>
      </section>

      <section className="staff-content">
        <div className="staff-intro">
          <p>
            We have put together a staff of highly qualified, experienced, and children-loving teachers.
            They are the backbone for the existence and success of our institution.
          </p>
        </div>

        <div className="staff-grid">
          {staff.map((member, index) => (
            <div key={index} className="staff-card">
              <div className="staff-avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{member.name}</h3>
              <p className="staff-role">{member.role}</p>
              <div className="staff-details">
                <p className="staff-credential">{member.credentials}</p>
                <p className="staff-experience">{member.experience}</p>
                <p className="staff-specialty">Specialty: {member.specialty}</p>
              </div>
              <a href={`mailto:${member.email}`} className="staff-email">
                <Mail size={16} /> Contact
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const AdmissionsPage = () => (
    <div className="page-content">
      <section className="admissions-hero">
        <h1 className="page-title">Admissions</h1>
        <p className="page-subtitle">
          Join the Gratitude family today
        </p>
      </section>

      <section className="admissions-content">
        <div className="admissions-info">
          <div className="info-card">
            <h2>Age Requirements</h2>
            <p>We accept children ages 3-11 for our Nursery and Primary programs.</p>
            <ul>
              <li><strong>Nursery:</strong> Ages 3-5</li>
              <li><strong>Primary:</strong> Ages 6-11</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Application Process</h2>
            <ol>
              <li>Contact us via email or phone to schedule a visit</li>
              <li>Complete the application form</li>
              <li>Submit required documents (birth certificate, previous records)</li>
              <li>Meet with our admissions team</li>
              <li>Receive enrollment confirmation</li>
            </ol>
          </div>

          <div className="info-card">
            <h2>What We Offer</h2>
            <ul>
              <li>Affordable quality education</li>
              <li>Bilingual instruction (English & French)</li>
              <li>Religious education and moral development</li>
              <li>Modern facilities and teaching methods</li>
              <li>Preparation for national examinations</li>
              <li>Small class sizes for individual attention</li>
            </ul>
          </div>

          <div className="info-card highlight">
            <h2>Ready to Apply?</h2>
            <p>
              Contact us today to learn more about enrollment for the current academic year.
              We look forward to welcoming your child to the Gratitude family!
            </p>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="page-content">
      <section className="contact-hero">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          We'd love to hear from you
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our programs or admissions? We're here to help!</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <h3>Email</h3>
                  <a href="mailto:info@gratitudebnps.com">info@gratitudebnps.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>Mile 3, Nkwen<br />Opposite Full Gospel<br />Bamenda, Cameroon</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <p>Visit us for contact details</p>
                </div>
              </div>
            </div>

            <div className="school-hours">
              <h3>School Hours</h3>
              <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
              <p className="note">Office hours may vary during holidays</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+237 XXX XXX XXX" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Programs</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us how we can help..." required></textarea>
              </div>

              <button type="submit" className="btn-primary full-width">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Gratitude Bilingual</h3>
          <p>Nursery & Primary School</p>
          <p className="tagline">"Your child's home away from home"</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <button onClick={() => scrollToSection('about')}>About Us</button>
          <button onClick={() => scrollToSection('programs')}>Programs</button>
          <button onClick={() => scrollToSection('staff')}>Our Staff</button>
          <button onClick={() => scrollToSection('admissions')}>Admissions</button>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Mile 3, Nkwen, Bamenda</p>
          <p>Opposite Full Gospel</p>
          <p>info@gratitudebnps.com</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook • Twitter • LinkedIn</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gratitude Bilingual Nursery & Primary School. All rights reserved.</p>
        <p>Founded 2006 • Bamenda, Cameroon</p>
      </div>
    </footer>
  );

  return (
    <div className="website">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .website {
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a1a1a;
          background: #fafafa;
          min-height: 100vh;
        }

        /* Header & Navigation */
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 80px;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-placeholder {
          width: 50px;
          height: 50px;
          background: #84cc16;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon {
          color: white;
          width: 28px;
          height: 28px;
        }

        .school-name h1 {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .school-name p {
          font-size: 13px;
          opacity: 0.9;
        }

        .desktop-nav {
          display: none;
          gap: 8px;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          background: transparent;
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link.active {
          background: #84cc16;
          color: #1a1a1a;
        }

        .mobile-menu-button {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          color: white;
          padding: 12px 16px;
          text-align: left;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-link.active {
          background: #84cc16;
          color: #1a1a1a;
          font-weight: 600;
        }

        /* Page Content */
        .page-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero {
          padding: 80px 0;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: #84cc16;
          color: #1a1a1a;
          padding: 8px 20px;
          border-radius: 24px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #1a1a1a;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }
        }

        .highlight {
          background: linear-gradient(135deg, #1e3a8a 0%, #84cc16 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #666;
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #1e3a8a;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
        }

        .btn-primary:hover {
          background: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(30, 58, 138, 0.4);
        }

        .btn-primary.large {
          padding: 18px 40px;
          font-size: 18px;
        }

        .btn-primary.full-width {
          width: 100%;
          justify-content: center;
        }

        .btn-secondary {
          background: transparent;
          color: #1e3a8a;
          border: 2px solid #1e3a8a;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: #1e3a8a;
          color: white;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 60px;
        }

        .stat-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-icon {
          color: #84cc16;
          margin-bottom: 16px;
        }

        .stat-card h3 {
          font-size: 32px;
          font-weight: 800;
          color: #1e3a8a;
          margin-bottom: 8px;
        }

        .stat-card p {
          color: #666;
          font-size: 14px;
        }

        /* Features Section */
        .features {
          padding: 80px 0;
          background: white;
          margin: 40px -24px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .section-title {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          text-align: center;
          padding: 32px;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .feature-icon.green {
          background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
          color: white;
        }

        .feature-icon.blue {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
          padding: 80px 24px;
          margin: 60px -24px;
          text-align: center;
          border-radius: 24px;
        }

        .cta-content h2 {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Page Headers */
        .about-hero,
        .programs-hero,
        .staff-hero,
        .admissions-hero,
        .contact-hero {
          text-align: center;
          padding: 60px 0 40px;
        }

        .page-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .page-subtitle {
          font-size: 20px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* About Page */
        .about-content {
          padding: 40px 0 80px;
        }

        .about-section {
          background: white;
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 32px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .about-section h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 20px;
        }

        .about-section p {
          line-height: 1.8;
          color: #444;
          font-size: 16px;
        }

        .director-section {
          margin-top: 60px;
        }

        .director-card {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
          padding: 48px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .director-avatar {
          width: 120px;
          height: 120px;
          background: #84cc16;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          font-weight: 800;
          color: #1a1a1a;
          flex-shrink: 0;
        }

        .director-info h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .director-title {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 16px;
        }

        .director-bio {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Programs Page */
        .programs-content {
          padding: 40px 0 80px;
        }

        .program-card {
          background: white;
          padding: 48px;
          border-radius: 20px;
          margin-bottom: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-left: 6px solid #84cc16;
        }

        .program-card h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 16px;
        }

        .program-description {
          font-size: 18px;
          color: #444;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .program-features {
          display: grid;
          gap: 12px;
        }

        .program-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #666;
          font-size: 16px;
        }

        .program-feature .feature-icon {
          color: #84cc16;
          flex-shrink: 0;
        }

        .curriculum-section {
          margin-top: 60px;
          background: #f8fafc;
          padding: 48px;
          border-radius: 20px;
        }

        .curriculum-section h2 {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 40px;
          text-align: center;
        }

        .curriculum-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .curriculum-item {
          background: white;
          padding: 24px;
          border-radius: 12px;
          border-top: 4px solid #1e3a8a;
        }

        .curriculum-item h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 8px;
        }

        .curriculum-item p {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Staff Page */
        .staff-content {
          padding: 40px 0 80px;
        }

        .staff-intro {
          background: white;
          padding: 32px;
          border-radius: 16px;
          text-align: center;
          margin-bottom: 48px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .staff-intro p {
          font-size: 18px;
          color: #444;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .staff-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s;
        }

        .staff-card:hover {
          transform: translateY(-4px);
        }

        .staff-avatar {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #1e3a8a 0%, #84cc16 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin: 0 auto 20px;
        }

        .staff-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .staff-role {
          font-size: 16px;
          color: #1e3a8a;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .staff-details {
          margin-bottom: 20px;
          padding: 20px 0;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }

        .staff-credential,
        .staff-experience,
        .staff-specialty {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .staff-email {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1e3a8a;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 20px;
          border: 2px solid #1e3a8a;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .staff-email:hover {
          background: #1e3a8a;
          color: white;
        }

        /* Admissions Page */
        .admissions-content {
          padding: 40px 0 80px;
        }

        .admissions-info {
          display: grid;
          gap: 24px;
        }

        .info-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .info-card h2 {
          font-size: 26px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 20px;
        }

        .info-card p {
          color: #444;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .info-card ul,
        .info-card ol {
          padding-left: 24px;
          color: #444;
        }

        .info-card li {
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .info-card.highlight {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: white;
        }

        .info-card.highlight h2 {
          color: white;
        }

        .info-card.highlight p {
          color: white;
          opacity: 0.95;
        }

        /* Contact Page */
        .contact-content {
          padding: 40px 0 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-info h2 {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .contact-info > p {
          color: #666;
          font-size: 16px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
        }

        .contact-method {
          display: flex;
          gap: 20px;
        }

        .method-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #1e3a8a 0%, #84cc16 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .method-details h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .method-details p,
        .method-details a {
          color: #666;
          line-height: 1.6;
          text-decoration: none;
        }

        .method-details a:hover {
          color: #1e3a8a;
        }

        .school-hours {
          background: #f8fafc;
          padding: 24px;
          border-radius: 12px;
        }

        .school-hours h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .school-hours p {
          color: #444;
          margin-bottom: 4px;
        }

        .school-hours .note {
          font-size: 14px;
          color: #666;
          margin-top: 8px;
        }

        .contact-form-container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .contact-form-container h2 {
          font-size: 28px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 32px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1e3a8a;
        }

        .form-group textarea {
          resize: vertical;
        }

        /* Footer */
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 60px 24px 24px;
          margin-top: 80px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .footer-section h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #84cc16;
        }

        .footer-section p {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .footer-section .tagline {
          color: #84cc16;
          font-style: italic;
        }

        .footer-section button {
          background: transparent;
          border: none;
          color: white;
          opacity: 0.8;
          padding: 6px 0;
          text-align: left;
          cursor: pointer;
          font-size: 14px;
          display: block;
          transition: opacity 0.2s;
        }

        .footer-section button:hover {
          opacity: 1;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-bottom p {
          font-size: 14px;
          opacity: 0.7;
          margin-bottom: 8px;
        }
      `}</style>

      <Header />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'programs' && <ProgramsPage />}
      {currentPage === 'staff' && <StaffPage />}
      {currentPage === 'admissions' && <AdmissionsPage />}
      {currentPage === 'contact' && <ContactPage />}

      <Footer />
    </div>
  );
}
