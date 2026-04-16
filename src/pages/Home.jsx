import { useEffect } from 'react';
import { Megaphone, FlaskConical } from 'lucide-react';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import ProjectCard from '../components/ProjectCard';
import SecondaryButton from '../components/SecondaryButton';
import SectionContainer from '../components/SectionContainer';
import './Home.css';

export default function Home() {
  useEffect(() => {
    document.title = 'Enactus MLNC — Social Entrepreneurship, Motilal Nehru College';
  }, []);
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
              Enactus Motilal Nehru College, University of Delhi — Creating impact through innovation, business, and purpose.
            </p>
            <div className="hero-cta">
              <PrimaryButton to="/projects">
                See Our Impact →
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
                  <span className="hero-impact-desc">Projects</span>
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
              <h2 className="impact-number">₹10L+</h2>
              <p className="impact-label">Revenue Generated</p>
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
                      { name: 'Blind Relief Association', abbr: 'BRA' },
                      { name: 'The Woman Company', abbr: 'TWC' },
                      { name: 'Streebal NGO', abbr: 'Streebal' },
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

      <section className="section section-bg-offwhite">
        <SectionContainer>
          <div className="grid grid-cols-2 align-center gap-large">
            <div className="about-visual">
              <div className="placeholder-image about-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p style={{fontSize:'0.8rem',color:'#AAAAAA',marginTop:'8px',textAlign:'center',fontFamily:'var(--font-body)'}}>
                  Team photo coming soon
                </p>
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

      <section className="section how-we-work-section">
        <SectionContainer>
          <div className="section-header text-center">
            <h2 className="heading-lg">How We Work</h2>
            <p className="text-lg section-subtitle">
              Three steps. Real impact. Measurable change.
            </p>
          </div>
          <div className="how-we-work-grid mt-xl">
            <div className="how-step">
              <div className="how-step-number">01</div>
              <h3 className="how-step-title">We Identify</h3>
              <p className="how-step-desc">
                We research pressing social, economic, and environmental challenges faced by underserved communities in our region.
              </p>
            </div>
            <div className="how-step-divider">→</div>
            <div className="how-step">
              <div className="how-step-number">02</div>
              <h3 className="how-step-title">We Build</h3>
              <p className="how-step-desc">
                We develop sustainable business models and entrepreneurial solutions — creating products and services that generate real revenue and employment.
              </p>
            </div>
            <div className="how-step-divider">→</div>
            <div className="how-step">
              <div className="how-step-number">03</div>
              <h3 className="how-step-title">We Impact</h3>
              <p className="how-step-desc">
                We measure outcomes — lives changed, revenue generated, entrepreneurs created — and scale what works.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section">
        <SectionContainer>
          <div className="section-header text-center">
            <h2 className="heading-lg">Our Projects</h2>
            <p className="text-lg section-subtitle">Four projects. Four communities. One shared mission.</p>
          </div>

          <div className="grid grid-cols-2 projects-grid-home">
            <ProjectCard
              to="/projects/desi"
              title="Project DESI"
              summary="Duty to Empathize, Sterilize, and Immunize. Eradicating canine rabies and spreading awareness about animal welfare."
              impactBadge="₹2.2L Revenue"
              isLive={true}
            />
            <ProjectCard
              to="/projects/sneh"
              title="Project SNEH"
              summary="Offering better sanitary alternatives and empowering underprivileged communities to become visionary entrepreneurs."
              impactBadge="₹14.2L · First India International Sale"
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
              impactBadge="₹35,000+ Revenue"
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
            <p className="text-lg section-subtitle">Marketing builds our voice. Research builds our solutions.</p>
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
          <p className="text-lg section-subtitle mt-3">From freshers to executives — every member drives the mission forward.</p>
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

      <section className="section final-cta-section section-bg-dark">
        <SectionContainer className="text-center">
          <h2 className="heading-lg text-white">
            Want to Make an Impact?
          </h2>
          <p className="text-lg text-light mt-3 final-cta-subtitle">
            Whether you are a student who wants to join, a brand looking to collaborate, or an organisation that shares our vision — we would love to connect.
          </p>
          <div className="final-cta-buttons mt-xl">
            <PrimaryButton to="/contact">
              Get in Touch →
            </PrimaryButton>
            <SecondaryButton to="/projects">
              See Our Work
            </SecondaryButton>
          </div>
        </SectionContainer>
      </section>

    </div>
  );
}
