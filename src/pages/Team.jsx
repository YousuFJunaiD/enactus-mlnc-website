import { Camera } from 'lucide-react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SectionContainer from '../components/SectionContainer';
import './Team.css';

export default function Team() {
  const PlaceholderGrid = ({ title }) => (
    <div className="team-tier">
      <h2 className="heading-md team-tier-title">{title}</h2>
      <div className="grid grid-cols-4 team-grid">
        {[1, 2, 3, 4].map(idx => (
          <Card key={idx} className="team-member-card placeholder-state">
            <div className="avatar-placeholder"></div>
            <div className="text-placeholder"></div>
            <div className="text-placeholder short"></div>
            <a
              href="https://instagram.com/enactusmlnc"
              target="_blank"
              rel="noopener noreferrer"
              className="team-placeholder-instagram"
            >
              <Camera size={12} />
              <span>Instagram</span>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="team-page">
      <PageHero
        className="team-hero"
        badge="People & Leadership"
        title="Our Team"
        kicker="A structured chapter powered by leadership, collaboration, and purpose."
        description="The dedicated individuals driving impact."
      />

      <section className="section section-bg-offwhite text-center">
        <SectionContainer>
          <p className="team-update-notice">Team details are being updated for the current session.</p>
          <div className="team-empty-state">
            <div className="team-empty-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="team-empty-title">
              Meet the Team — Coming Soon
            </h3>
            <p className="team-empty-desc">
              We are updating our team page for the 2025–26 session. Real names, faces, and stories coming very soon.
            </p>
            <a href="https://instagram.com/enactusmlnc" target="_blank" rel="noopener noreferrer" className="team-empty-cta">
              Follow @enactusmlnc for updates
            </a>
          </div>
          
          <div className="mentors-tier">
            <h2 className="heading-md team-tier-title">Mentors</h2>
            <div className="grid grid-cols-2 mentors-grid max-w-800 mx-auto">
              <Card className="team-member-card">
                <div className="mentor-avatar mentor-avatar--initials">AP</div>
                <h3 className="heading-sm">Dr. Anu Pandey</h3>
                <p className="text-yellow">Faculty Advisor</p>
              </Card>
              <Card className="team-member-card">
                <div className="mentor-avatar mentor-avatar--initials">AK</div>
                <h3 className="heading-sm">Mr. Ashish Kumar</h3>
                <p className="text-yellow">Enactus India Mentor</p>
              </Card>
            </div>
          </div>

          <PlaceholderGrid title="Core Executive" />
          <PlaceholderGrid title="Senior Associates" />
          <PlaceholderGrid title="Junior Associates" />

        </SectionContainer>
      </section>

      <section className="section section-bg-dark text-center">
        <SectionContainer>
          <h2 className="heading-md text-white">
            Want to Be Part of This Team?
          </h2>
          <p className="text-lg text-light mt-2" style={{opacity:0.85,maxWidth:'48ch',marginInline:'auto'}}>
            Follow us on Instagram to stay updated on recruitment and events.
          </p>
          <div className="mt-xl" style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <PrimaryButton to="/contact">
              Contact Us →
            </PrimaryButton>
            <SecondaryButton to="/projects">
              Our Projects
            </SecondaryButton>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
