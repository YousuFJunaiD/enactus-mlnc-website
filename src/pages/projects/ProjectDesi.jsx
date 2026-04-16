import { useEffect } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import Button from '../../components/Button';
import './ProjectPage.css';
import seminar1 from '../../assets/desi-seminar-1.jpeg';

export default function ProjectDesi() {
  useEffect(() => {
    document.title = 'Project DESI — Animal Welfare & Social Enterprise | Enactus MLNC';
  }, []);
  return (
    <div className="project-detail-page">
      <section className="project-hero section-bg-dark">
        <div className="container max-w-800 mx-auto">
          <div className="project-breadcrumb">
            <a href="/projects" className="breadcrumb-link">Projects</a>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">DESI</span>
          </div>
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
              Started in 2014, Project DESI — Duty to Empathize, Sterilize, and Immunize — works to improve lives of community dogs while creating sustainable income for local communities.
            </p>
            <ul className="project-bullet-list mt-3">
              <li>Eradicating canine rabies through immunization drives</li>
              <li>Eliminating starvation among stray dogs through Desi Rasoi</li>
              <li>Reducing road accidents involving community dogs</li>
              <li>Creating income for underprivileged women through BeDesi products</li>
              <li>Spreading awareness about animal welfare across communities</li>
            </ul>
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
              <img src={seminar1} alt="Enactus MLNC seminar with Heads Up For Tails" loading="lazy" decoding="async" style={{borderRadius:'var(--radius-lg)',objectFit:'cover',width:'100%',maxHeight:'400px'}} />
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
            <p className="sdg-explainer">
              Aligned with the UN's 17 Sustainable Development Goals — global targets for a better world by 2030.
            </p>
            <div className="sdg-icons mt-3">
              {[
                { n: '1', label: 'No Poverty' },
                { n: '2', label: 'Zero Hunger' },
                { n: '3', label: 'Good Health' },
                { n: '4', label: 'Education' },
                { n: '5', label: 'Gender Equality' },
                { n: '8', label: 'Decent Work' },
                { n: '10', label: 'Reduced Inequalities' },
              ].map(sdg => (
                <a
                  key={sdg.n}
                  href={`https://sdgs.un.org/goals/goal${sdg.n}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sdg-badge"
                  title={`SDG ${sdg.n} — ${sdg.label}`}
                  aria-label={`SDG ${sdg.n} ${sdg.label} — Learn more`}
                >
                  <span className="sdg-number">{sdg.n}</span>
                  <span className="sdg-name">{sdg.label}</span>
                </a>
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
