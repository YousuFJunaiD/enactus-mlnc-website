import { useEffect } from 'react';
import { Mail, MapPin, Globe, Camera } from 'lucide-react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Enactus MLNC';
  }, []);
  return (
    <div className="contact-page">
      <PageHero
        className="contact-hero"
        badge="Let's Connect"
        title="Get in Touch"
        kicker="Partnerships, collaboration, and conversations start here."
        description="We are always looking for partners, sponsors, and collaborators who share our vision."
      />

      <section className="section">
        <SectionContainer narrow>
          <Card className="contact-card">
            <h2 className="heading-md mb-4 text-center">Contact Information</h2>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon"><Mail className="text-yellow" size={24} /></div>
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <a href="mailto:enactusmlnc@gmail.com" className="text-secondary hover-text-primary">enactusmlnc@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><MapPin className="text-yellow" size={24} /></div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-secondary">Motilal Nehru College,<br />University of Delhi, Benito Juarez Marg,<br />South Campus, New Delhi 110021</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><Globe className="text-yellow" size={24} /></div>
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <a href="https://linkedin.com/company/enactusmlnc" target="_blank" rel="noopener noreferrer" className="text-secondary hover-text-primary">
                    linkedin.com/company/enactusmlnc
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><Camera className="text-yellow" size={24} /></div>
                <div>
                  <h3 className="font-bold">Instagram</h3>
                  <a href="https://instagram.com/enactusmlnc" target="_blank" rel="noopener noreferrer" className="text-secondary hover-text-primary">@enactusmlnc</a>
                </div>
              </div>
            </div>

            <div className="project-instagrams mt-lg pt-4 border-top">
              <h3 className="font-bold mb-3 text-center">Project Socials</h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <a href="https://instagram.com/project.desi" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <Camera size={18} /> @project.desi
                </a>
                <a href="https://instagram.com/project_sneh" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <Camera size={18} /> @project_sneh
                </a>
                <a href="https://instagram.com/project_biothene" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <Camera size={18} /> @project_biothene
                </a>
                <a href="https://instagram.com/project_tissera" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <Camera size={18} /> @project_tissera
                </a>
              </div>
            </div>
          </Card>
        </SectionContainer>
      </section>
    </div>
  );
}
