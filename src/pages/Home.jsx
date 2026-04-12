import { ArrowRight, Megaphone, FlaskConical } from 'lucide-react';
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
            <div className="hero-impact-card">
              <div className="hero-impact-card-header">
                <span className="hero-impact-label">Our Impact at a Glance</span>
              </div>
              <div className="hero-impact-grid">
                <div className="hero-impact-stat">
                  <span className="hero-impact-number">10,000+</span>
                  <span className="hero-impact-desc">Lives Impacted</span>
                </div>
                <div className="hero-impact-stat">
                  <span className="hero-impact-number">4</span>
                  <span className="hero-impact-desc">Active Projects</span>
                </div>
                <div className="hero-impact-stat">
                  <span className="hero-impact-number">&#8377;10L+</span>
                  <span className="hero-impact-desc">Revenue Generated</span>
                </div>
                <div className="hero-impact-stat">
                  <span className="hero-impact-number">200+</span>
                  <span className="hero-impact-desc">Entrepreneurs</span>
                </div>
              </div>
              <div className="hero-project-pills">
                <span className="hero-project-pill">DESI</span>
                <span className="hero-project-pill">SNEH</span>
                <span className="hero-project-pill">BIOTHENE</span>
                <span className="hero-project-pill">TISSERA</span>
              </div>
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
              <div className="mentor-avatar mentor-avatar--initials">AP</div>
              <h3 className="heading-md">Dr. Anu Pandey</h3>
              <p className="text-yellow font-bold">Faculty Advisor</p>
            </Card>
            <Card className="mentor-card">
              <div className="mentor-avatar mentor-avatar--initials">AK</div>
              <h3 className="heading-md">Mr. Ashish Kumar</h3>
              <p className="text-yellow font-bold">Enactus India Mentor</p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      <section className="departments-section section-bg-offwhite">
        <SectionContainer>
          <div className="section-header text-center">
            <h2 className="heading-lg">Our Departments</h2>
            <p className="text-lg section-subtitle">Every team plays a critical role in turning ideas into impact.</p>
          </div>
          <div className="departments-grid mt-lg">
            <div className="department-card">
              <div className="department-icon">
                <Megaphone size={28} />
              </div>
              <h3 className="department-title">Marketing & Outreach</h3>
              <p className="department-desc">
                Building brand presence, managing social media, forging partnerships, and telling the stories that matter.
              </p>
            </div>
            <div className="department-card">
              <div className="department-icon">
                <FlaskConical size={28} />
              </div>
              <h3 className="department-title">Research & Development</h3>
              <p className="department-desc">
                Identifying social challenges, prototyping solutions, and engineering sustainable products that drive real change.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="pyramid-section">
        <SectionContainer className="text-center">
          <h2 className="heading-lg">Chapter Structure</h2>
          <p className="text-lg section-subtitle mt-3">A collaborative hierarchy built on mentorship and shared purpose.</p>
          <div className="pyramid-structure mt-xl">
            <div className="pyramid-row">
              <div className="pyramid-bar">President</div>
              <div className="pyramid-bar">Vice President</div>
            </div>
            <div className="pyramid-row">
              <div className="pyramid-bar">General Secretary</div>
              <div className="pyramid-bar">Treasurer</div>
              <div className="pyramid-bar">Tech Lead</div>
            </div>
            <div className="pyramid-row">
              <div className="pyramid-bar">Project Heads</div>
              <div className="pyramid-bar">Marketing Head</div>
              <div className="pyramid-bar">Research Head</div>
              <div className="pyramid-bar">HR Head</div>
            </div>
            <div className="pyramid-row">
              <div className="pyramid-bar">Senior Associates</div>
              <div className="pyramid-bar">Core Team</div>
              <div className="pyramid-bar">Project Coordinators</div>
            </div>
            <div className="pyramid-row">
              <div className="pyramid-bar">Junior Associates</div>
              <div className="pyramid-bar">Volunteers</div>
              <div className="pyramid-bar">Freshers</div>
              <div className="pyramid-bar">Interns</div>
              <div className="pyramid-bar">Members</div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section partners-section">
        <SectionContainer className="text-center">
          <h2 className="heading-md mb-lg">Featured In & Partnered With</h2>
          <div className="partners-ticker-wrapper mt-lg">
            <div className="partners-ticker">
              <div className="partners-ticker-track">
                {[...Array(3)].map((_, groupIndex) => (
                  <div key={groupIndex} className="partners-ticker-group">
                    {[
                      { name: 'Hindustan Times', abbr: 'HT City' },
                      { name: 'ANI News India', abbr: 'ANI News' },
                      { name: 'People for Animals', abbr: 'PeTA' },
                      { name: 'FIAPO', abbr: 'FIAPO' },
                      { name: 'Dailyhunt', abbr: 'Dailyhunt' },
                      { name: 'Country News Today', abbr: 'CNT' },
                      { name: 'Nishabd', abbr: 'Nishabd' },
                      { name: 'ANI Ecogreen', abbr: 'Ecogreen' },
                      { name: 'The Hindu', abbr: 'The Hindu' },
                      { name: 'India Today', abbr: 'India Today' },
                      { name: 'Zee News', abbr: 'Zee News' },
                    ].map((partner) => (
                      <div key={partner.abbr} className="partner-logo-item">
                        <span className="partner-logo-name">{partner.abbr}</span>
                        <span className="partner-logo-full">{partner.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
