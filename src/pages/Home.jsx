import { ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import ProjectCard from '../components/ProjectCard';
import SecondaryButton from '../components/SecondaryButton';
import SectionContainer from '../components/SectionContainer';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section section-bg-dark">
        <SectionContainer className="hero-container grid grid-cols-2">
          <div className="hero-content">
            <span className="page-hero-badge hero-badge">Creating Impact Since 2014</span>
            <h1 className="heading-xl">
              Empowering Communities Through <span className="text-yellow">Social Entrepreneurship</span>
            </h1>
            <p className="text-lg text-light hero-subtitle">
              Enactus Motilal Nehru College - Creating impact through innovation, business, and purpose.
            </p>
            <div className="hero-cta">
              <PrimaryButton to="/projects">
                Explore Our Projects
              </PrimaryButton>
            </div>
          </div>
          <div className="hero-visual flex-center">
            <div className="hero-brand-pattern">
              <div className="pattern-block yellow"></div>
              <div className="pattern-block charcoal"></div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="impact-strip">
        <SectionContainer>
          <div className="grid grid-cols-4 text-center">
            <div className="impact-item">
              <h2 className="impact-number">4</h2>
              <p className="impact-label">Projects</p>
            </div>
            <div className="impact-item">
              <h2 className="impact-number">10,000+</h2>
              <p className="impact-label">Lives</p>
            </div>
            <div className="impact-item">
              <h2 className="impact-number">200+</h2>
              <p className="impact-label">Entrepreneurs</p>
            </div>
            <div className="impact-item">
              <h2 className="impact-number">Rs. 10L+</h2>
              <p className="impact-label">Revenue</p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section section-bg-offwhite">
        <SectionContainer>
          <div className="grid grid-cols-2 align-center gap-large">
            <div className="about-visual">
              <div className="placeholder-image about-placeholder">
                <span className="placeholder-text">Enactus MLNC Team</span>
              </div>
            </div>
            <div className="about-text">
              <h2 className="heading-lg">Who We Are</h2>
              <p className="text-lg">
                We are a community of student leaders committed to using the power of entrepreneurial action to transform lives and shape a better, more sustainable world.
              </p>
              <br />
              <p className="text-lg">
                Since our founding in 2014, Enactus MLNC has operated at the intersection of business acumen and social change, addressing critical issues from animal welfare to women&apos;s empowerment and environmental sustainability.
              </p>
              <br />
              <SecondaryButton to="/about">More About Us</SecondaryButton>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section">
        <SectionContainer>
          <div className="section-header text-center">
            <h2 className="heading-lg">Our Projects</h2>
            <p className="text-lg section-subtitle">Initiatives that drive real, measurable impact.</p>
          </div>

          <div className="grid grid-cols-2 projects-grid-home">
            <ProjectCard
              to="/projects/desi"
              title="Project DESI"
              summary="Duty to Empathize, Sterilize, and Immunize. Eradicating canine rabies and spreading awareness about animal welfare."
              impactBadge="Rs. 2.2L Revenue"
              isLive={true}
            />
            <ProjectCard
              to="/projects/sneh"
              title="Project SNEH"
              summary="Offering better sanitary alternatives and empowering underprivileged communities to become visionary entrepreneurs."
              impactBadge="Rs. 14.2L Revenue + First International Sale"
              isLive={true}
            />
            <ProjectCard
              to="/projects/biothene"
              title="Project BIOTHENE"
              summary="Producing eco-friendly bioplastic bags from biodegradable materials like cornstarch to reduce plastic pollution."
              impactBadge="400kg plastic reduced"
              isLive={true}
            />
            <ProjectCard
              to="/projects/tissera"
              title="Project TISSERA"
              summary="Transforming textile waste into sustainable value-added products while empowering women entrepreneurs."
              impactBadge="Rs. 35,000+ Revenue"
              isLive={true}
            />
          </div>

          <div className="text-center mt-xl">
            <SecondaryButton to="/projects">View All Projects</SecondaryButton>
          </div>
        </SectionContainer>
      </section>

      <section className="section section-bg-offwhite">
        <SectionContainer className="text-center">
          <h2 className="heading-lg">Our Mentors</h2>
          <div className="grid grid-cols-2 mentors-grid mt-lg">
            <Card className="mentor-card">
              <div className="mentor-avatar"></div>
              <h3 className="heading-md">Dr. Anu Pandey</h3>
              <p className="text-yellow font-bold">Faculty Advisor</p>
            </Card>
            <Card className="mentor-card">
              <div className="mentor-avatar"></div>
              <h3 className="heading-md">Mr. Ashish Kumar</h3>
              <p className="text-yellow font-bold">Enactus India Mentor</p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      <section className="section partners-section">
        <SectionContainer className="text-center">
          <h2 className="heading-md mb-lg">Featured In & Partnered With</h2>
          <div className="partners-grid mt-lg">
            {['HT City', 'ANI News India', 'PeTA', 'FIAPO', 'Dailyhunt', 'Country News Today', 'Nishabd', 'ANI Ecogreen'].map((partner) => (
              <div key={partner} className="partner-logo-placeholder">
                {partner}
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
