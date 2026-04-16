import { Link } from 'react-router-dom';
import { Globe, Camera, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section-bg-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <span className="footer-kicker">Enactus MLNC</span>
            <h2 className="footer-logo">ENACTUS <span className="text-yellow">MLNC</span></h2>
            <p className="footer-tagline">
              Enactus MLNC - Creating Impact Through Innovation
            </p>
            <p className="footer-desc">
              Empowering communities and creating sustainable social impact since 2014 through innovation, business, and purpose.
            </p>
          </div>

          <div className="footer-col-links">
            <h3 className="footer-heading">Navigation</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col-projects">
            <h3 className="footer-heading">Project Links</h3>
            <div className="social-links-stack">
              <a href="https://instagram.com/project.desi" target="_blank" rel="noopener noreferrer" aria-label="Project DESI Instagram">
                <Camera size={18} /> <span className="social-label">Project DESI</span>
              </a>
              <a href="https://instagram.com/project_sneh" target="_blank" rel="noopener noreferrer" aria-label="Project SNEH Instagram">
                <Camera size={18} /> <span className="social-label">Project SNEH</span>
              </a>
              <a href="https://instagram.com/project_biothene" target="_blank" rel="noopener noreferrer" aria-label="Project BIOTHENE Instagram">
                <Camera size={18} /> <span className="social-label">Project BIOTHENE</span>
              </a>
              <a href="https://instagram.com/project_tissera" target="_blank" rel="noopener noreferrer" aria-label="Project TISSERA Instagram">
                <Camera size={18} /> <span className="social-label">Project TISSERA</span>
              </a>
            </div>
          </div>

          <div className="footer-col-social">
            <h3 className="footer-heading">Social Presence</h3>
            <p className="footer-meta">Stay connected with the chapter, our work, and our community.</p>
            <div className="social-links-stack">
              <a href="https://instagram.com/enactusmlnc" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Enactus MLNC Instagram">
                @enactusmlnc
              </a>
              <a href="https://linkedin.com/company/enactusmlnc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Globe size={18} /> <span className="social-label">LinkedIn</span>
              </a>
              <a href="mailto:enactusmlnc@gmail.com" aria-label="Email">
                <Mail size={18} /> <span className="social-label">enactusmlnc@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Enactus MLNC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
