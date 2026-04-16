import { useEffect } from 'react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import PrimaryButton from '../components/PrimaryButton';
import SectionContainer from '../components/SectionContainer';
import './Achievements.css';

export default function Achievements() {
  useEffect(() => {
    document.title = 'Achievements | Enactus MLNC';
  }, []);
  return (
    <div className="achievements-page">
      <PageHero
        className="achievements-hero"
        badge="Global Milestone"
        title="Our Achievements"
        kicker="Milestones that build trust, prove impact, and show scale."
        description="A testament to our dedication, innovation, and global impact."
      />

      <section className="section">
        <SectionContainer>
          <div className="hero-achievement mb-lg">
            <div className="hero-achievement-content">
              <span className="achievement-hero-badge">Biggest Achievement</span>
              <h2 className="heading-lg mb-2">International Sale — First in Enactus India History</h2>
              <p className="text-yellow font-bold text-lg mb-3">(November–December 2025)</p>
              <p className="text-lg mb-3">
                For the first time in Enactus MLNC&apos;s 14-year journey, Project SNEH successfully completed an international sale, exporting 50+ handcrafted tote bags to the Canadian market.
              </p>
              <ul className="achievement-list">
                <li>Collaboration with Enactus UPEI and University of Calgary</li>
                <li>MoU signed with University of Calgary in August 2025</li>
                <li>MoU signed with Enactus UPEI in November 2025</li>
                <li>Products handcrafted by local women artisans</li>
                <li>Proof that Indian student social enterprise can scale globally</li>
              </ul>
              <div className="achievement-stat-pills">
                <div className="achievement-stat-pill">
                  <span className="asp-number">50+</span>
                  <span className="asp-label">Bags Exported</span>
                </div>
                <div className="achievement-stat-pill">
                  <span className="asp-number">2</span>
                  <span className="asp-label">MoUs Signed</span>
                </div>
                <div className="achievement-stat-pill">
                  <span className="asp-number">2</span>
                  <span className="asp-label">Countries</span>
                </div>
                <div className="achievement-stat-pill">
                  <span className="asp-number">14</span>
                  <span className="asp-label">Years of Work</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="mb-lg mt-lg">
            <h2 className="heading-md mb-3 text-center">Competition Wins & Grants</h2>
            <div className="grid grid-cols-2 gap-large">
              <Card className="achievement-card">
                <h3 className="heading-sm">Business Plan Competition - SGNDKC</h3>
                <p className="text-secondary mb-2">January 2026</p>
                <p>Represented Enactus MLNC at the Business Plan Competition at SGNDKC, January 2026.</p>
              </Card>
              <Card className="achievement-card">
                <h3 className="heading-sm">Business Plan Competition - IIT Roorkee</h3>
                <p className="text-secondary mb-2">February 7, 2026</p>
                <p>Competed at the Business Plan Competition at IIT Roorkee among top teams from across India, February 2026.</p>
              </Card>
              <Card className="achievement-card">
                <h3 className="heading-sm">Case Competition - IIT Roorkee</h3>
                <p className="text-secondary mb-2">February 2026</p>
                <p>Participated in the Case Competition at IIT Roorkee, demonstrating innovative problem-solving and strategy, February 2026.</p>
              </Card>
              <Card className="achievement-card">
                <h3 className="heading-sm">Enactus Global Grant</h3>
                <p className="text-secondary mb-2">2025</p>
                <p><span className="font-bold">$1,000 grant</span> awarded to Project SNEH for expanding production capabilities.</p>
              </Card>
            </div>
          </div>

          <hr className="divider" />

          <div className="mb-lg mt-lg text-center">
            <h2 className="heading-md mb-3">Project Milestones</h2>
            <div className="grid grid-cols-3 gap-large metric-grid">
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">14 Years</h3>
                <p>of sustainable operation</p>
              </Card>
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">₹14.2L+</h3>
                <p>SNEH Revenue</p>
              </Card>
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">58,000+</h3>
                <p>Sanitary napkins sold</p>
              </Card>
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">2,200</h3>
                <p>Dogs immunized (DESI)</p>
              </Card>
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">₹35,000+</h3>
                <p>TISSERA Sales since launch</p>
              </Card>
              <Card className="metric-box">
                <h3 className="text-yellow text-xl font-bold">40kg+</h3>
                <p>BIOTHENE sold across 3 drives</p>
              </Card>
            </div>
          </div>

          <hr className="divider" />

          <div className="mt-lg text-center">
            <h2 className="heading-md mb-3">Press & Media Coverage</h2>
            <p className="mb-4">Our work has been covered by leading national and regional publications.</p>
            <div className="grid grid-cols-4 press-grid">
              {[
              {name:'Hindustan Times / HT City', note:'National daily coverage'},
              {name:'ANI News India', note:'National news wire coverage'},
              {name:'Country News Today', note:'Digital news coverage'},
              {name:'Nishabd', note:'Independent media coverage'},
              {name:'Tarrar', note:'Digital platform coverage'},
              {name:'Dailyhunt', note:'Platform coverage'},
              {name:'FIAPO', note:'Animal welfare org feature'},
              {name:'PeTA', note:'Animal rights org feature'},
            ].map((item) => (
              <Card key={item.name} className="press-logo-card">
                <h4 className="font-bold mb-1">{item.name}</h4>
                <p className="text-sm text-secondary">{item.note}</p>
              </Card>
            ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="section section-bg-dark text-center">
        <SectionContainer>
          <h2 className="heading-md text-white">
            Partner With a Proven Team
          </h2>
          <p className="text-lg text-light mt-2" style={{opacity:0.85,maxWidth:'48ch',marginInline:'auto'}}>
            From local communities to international collaborations — we are always looking for partners who share our vision.
          </p>
          <div className="mt-xl">
            <PrimaryButton to="/contact">
              Get in Touch →
            </PrimaryButton>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
