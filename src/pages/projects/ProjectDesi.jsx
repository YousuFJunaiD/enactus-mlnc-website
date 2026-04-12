import { ArrowLeft, Camera } from 'lucide-react';
import Button from '../../components/Button';
import './ProjectPage.css';
import seminar1 from '../../assets/desi-seminar-1.jpeg';

export default function ProjectDesi() {
  return (
    <div className="project-detail-page">
      <section className="project-hero section-bg-dark">
        <div className="container max-w-800 mx-auto">
          <span className="text-yellow font-bold uppercase tracking-wider">Since 2014</span>
          <h1 className="heading-xl mt-2">Project DESI</h1>
          <p className="project-hero-subtitle text-light">
            Duty to Empathize, Sterilize, and Immunize
          </p>
          <a href="https://instagram.com/project.desi" target="_blank" rel="noopener noreferrer" className="contact-social-link mt-4" style={{display: 'inline-flex'}}>
            <Camera size={18} /> @project.desi
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-800 mx-auto">
          
          <div className="content-block text-center">
            <h2 className="project-mission text-yellow">
              "Eradicate canine rabies, eliminate starvation, reduce road accidents among stray dogs, and spread awareness among the masses."
            </h2>
            <p className="text-lg">
              Started in 2014, Project DESI stands for the Duty to Empathize, Sterilize, and Immunize. We work systematically to improve the lives of community dogs while simultaneously creating sustainable income streams for local communities.
            </p>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Business Model (3 Arms)</h2>
            <div className="grid grid-cols-3 mt-4 gap-3">
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)', textAlign: 'left'}}>
                <h3 className="heading-sm">BeDesi</h3>
                <p>Handcrafted pet accessories made by underprivileged women.</p>
              </div>
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)', textAlign: 'left'}}>
                <h3 className="heading-sm">Desi Rasoi</h3>
                <p>Community kitchen serving nutritious meals for stray dogs.</p>
              </div>
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)', textAlign: 'left'}}>
                <h3 className="heading-sm">Svadhyaya</h3>
                <p>Purpose-driven stationery line sparking awareness.</p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Impact & Revenue</h2>
            
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">2,200</div>
                <div className="stat-label">Dogs Immunized & Sterilized</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Dogs Hydrated</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">16K+</div>
                <div className="stat-label">Meals Served</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">200+</div>
                <div className="stat-label">Adoptions</div>
              </div>
            </div>
            
            <div className="stats-grid mt-3">
              <div className="stat-box">
                <div className="stat-number">150+</div>
                <div className="stat-label">Rescues</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">15+</div>
                <div className="stat-label">Entrepreneurs</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">₹2.2L</div>
                <div className="stat-label">2024-25 Revenue</div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Recent Achievements</h2>
            <ul className="achievement-list mt-3">
              <li>Educational seminar with Heads Up For Tails Foundation on dog safety and empathy.</li>
              <li>Session led by Sakshi Singh Raghuvanshi on respectful interaction with community dogs.</li>
              <li>Participated in Business Plan competition at SGNDKC (January 2026).</li>
              <li>Featured in Case competition at IIT Roorkee (February 2026).</li>
            </ul>
            <div className="mt-4">
              <img src={seminar1} alt="Enactus MLNC seminar with Heads Up For Tails" style={{borderRadius:'var(--radius-lg)',objectFit:'cover',width:'100%',maxHeight:'400px'}} />
            </div>
          </div>
          
          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Event Gallery</h2>
            <div className="image-gallery mt-4">
              <div className="gallery-img-placeholder">
                <Camera size={32} />
                <span>Event photo coming soon</span>
              </div>
              <div className="gallery-img-placeholder">
                <Camera size={32} />
                <span>Field work photo coming soon</span>
              </div>
              <div className="gallery-img-placeholder">
                <Camera size={32} />
                <span>Team photo coming soon</span>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">SDGs Addressed</h2>
            <div className="sdg-icons mt-3">
              {['1', '2', '3', '4', '5', '8', '10'].map(sdg => (
                <div key={sdg} className="sdg-badge" title={`SDG ${sdg}`}>{sdg}</div>
              ))}
            </div>
          </div>

          <div className="content-block text-center mt-xl">
            <Button to="/projects" variant="secondary">
              <ArrowLeft size={16} /> Back to Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
