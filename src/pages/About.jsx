import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import './About.css';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Enactus MLNC';
  }, []);
  return (
    <div className="about-page">
      <PageHero
        className="about-hero"
        badge="Our Foundation"
        title="About Us"
        kicker="Student-led action. Sustainable change. Long-term impact."
        description="A community of student leaders using entrepreneurial action to transform lives and shape a more sustainable world."
      />

      <section className="section">
        <SectionContainer>
          <div className="grid grid-cols-2 align-center gap-large">
            <div>
              <h2 className="heading-lg">Our Story</h2>
              <p className="text-lg">
                Founded in 2014, Enactus Motilal Nehru College has grown from a small group of passionate students into a formidable force for social good. Over the past decade, we have consistently pushed the boundaries of what student-led social entrepreneurship can achieve.
              </p>
              <br/>
              <p className="text-lg">
                We identify pressing social, economic, and environmental challenges and develop sustainable business models to solve them. By empowering marginalized communities with skills, resources, and market access, we help them transition from dependency to self-reliance.
              </p>
            </div>
            <div className="about-image-placeholder">
              Team Photo / Action Shot
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section section-bg-offwhite text-center">
        <SectionContainer>
          <h2 className="heading-lg mb-lg">Core Values</h2>
          <div className="grid grid-cols-4 value-cards">
            <div className="value-card">
              <h3 className="heading-md text-yellow">01</h3>
              <h4 className="value-title">Passion</h4>
              <p>Driven by an unwavering commitment to create meaningful change in society.</p>
            </div>
            <div className="value-card">
              <h3 className="heading-md text-yellow">02</h3>
              <h4 className="value-title">Innovation</h4>
              <p>Designing creative, scalable business models for complex social problems.</p>
            </div>
            <div className="value-card">
              <h3 className="heading-md text-yellow">03</h3>
              <h4 className="value-title">Collaboration</h4>
              <p>Partnering with communities, experts, and organizations to maximize impact.</p>
            </div>
            <div className="value-card">
              <h3 className="heading-md text-yellow">04</h3>
              <h4 className="value-title">Integrity</h4>
              <p>Operating with transparency, respect, and deep empathy for our beneficiaries.</p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section timeline-section">
        <SectionContainer>
          <div className="section-header text-center mb-lg">
            <h2 className="heading-lg">Our Journey</h2>
            <p className="text-lg section-subtitle">From a small idea to a decade of impact — milestones that define us.</p>
          </div>
          <div className="timeline-simple">
            <div className="timeline-item-simple">
              <div className="timeline-dot"></div>
              <div className="timeline-content-simple">
                <span className="timeline-year">2014</span>
                <h3>Founded at Motilal Nehru College</h3>
                <p>Enactus MLNC established at Motilal Nehru College, University of Delhi — beginning a 14-year journey of social entrepreneurship.</p>
              </div>
            </div>
            <div className="timeline-item-simple">
              <div className="timeline-dot"></div>
              <div className="timeline-content-simple">
                <span className="timeline-year">2025</span>
                <h3>Project TISSERA Launched</h3>
                <p>Transforming textile waste into sustainable value-added products while empowering women from underprivileged communities.</p>
              </div>
            </div>
            <div className="timeline-item-simple">
              <div className="timeline-dot"></div>
              <div className="timeline-content-simple">
                <span className="timeline-year">2025</span>
                <h3>Project BIOTHENE Commenced</h3>
                <p>MoU signed with Packaging Club for biodegradable bag manufacturing using cornstarch — addressing plastic pollution.</p>
              </div>
            </div>
            <div className="timeline-item-simple">
              <div className="timeline-dot"></div>
              <div className="timeline-content-simple">
                <span className="timeline-year">2025–26</span>
                <h3>First International Sale in Enactus India</h3>
                <p>Project SNEH exported 50+ handcrafted tote bags to Canada in collaboration with Enactus UPEI and University of Calgary — a historic first in Enactus India history.</p>
              </div>
            </div>
            <div className="timeline-item-simple">
              <div className="timeline-dot"></div>
              <div className="timeline-content-simple">
                <span className="timeline-year">2026</span>
                <h3>National Competitions</h3>
                <p>Participated in Business Plan competitions at SGNDKC and IIT Roorkee, representing Enactus MLNC at national level.</p>
              </div>
            </div>
            <p className="timeline-note">
              More milestones being added soon.
            </p>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
