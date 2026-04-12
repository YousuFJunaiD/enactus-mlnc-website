import PageHero from '../components/PageHero';
import SectionContainer from '../components/SectionContainer';
import './About.css';

export default function About() {
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
          <div className="timeline">
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year text-yellow font-bold">2014</span>
                <h3 className="heading-sm">Chapter Founded</h3>
                <p className="text-sm">Enactus MLNC established at Motilal Nehru College, University of Delhi, with a small team of passionate students.</p>
              </div>
            </div>
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year text-yellow font-bold">2018</span>
                <h3 className="heading-sm">National Recognition</h3>
                <p className="text-sm">First major national competition appearance with Project DESI, receiving significant media attention from HT City and ANI News.</p>
              </div>
            </div>
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year text-yellow font-bold">2022</span>
                <h3 className="heading-sm">International Breakthrough</h3>
                <p className="text-sm">Project SNEH achieved its first international sale, marking a milestone in cross-border social entrepreneurship.</p>
              </div>
            </div>
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year text-yellow font-bold">2023</span>
                <h3 className="heading-sm">Environmental Expansion</h3>
                <p className="text-sm">Launched Project BIOTHENE and Project TISSERA, expanding our portfolio to address plastic pollution and textile waste.</p>
              </div>
            </div>
            <div className="timeline-item reveal-on-scroll">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year text-yellow font-bold">2025</span>
                <h3 className="heading-sm">A Decade of Impact</h3>
                <p className="text-sm">Celebrating 10+ years, 10,000+ lives impacted, and continued growth with an expanded team and multi-project portfolio.</p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
