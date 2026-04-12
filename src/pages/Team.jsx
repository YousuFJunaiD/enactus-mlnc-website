import { Camera } from 'lucide-react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
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
    </div>
  );
}
