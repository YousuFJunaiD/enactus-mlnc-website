import { useEffect } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import Button from '../../components/Button';
import './ProjectPage.css';

export default function ProjectBiothene() {
  useEffect(() => {
    document.title = 'Project BIOTHENE — Biodegradable Bags | Enactus MLNC';
  }, []);
  return (
    <div className="project-detail-page">
      <section className="project-hero section-bg-dark">
        <div className="container max-w-800 mx-auto">
          <div className="project-breadcrumb">
            <a href="/projects" className="breadcrumb-link">Projects</a>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">BIOTHENE</span>
          </div>
          <h1 className="heading-xl mt-2">Project BIOTHENE</h1>
          <p className="project-hero-subtitle text-light">
            100% biodegradable bags from cornstarch.
          </p>
          <a href="https://instagram.com/project_biothene" target="_blank" rel="noopener noreferrer" className="contact-social-link mt-4" style={{display: 'inline-flex'}}>
            <Camera size={18} /> @project_biothene
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-800 mx-auto">
          
          <div className="content-block text-center mb-xl">
            <h2 className="project-mission text-yellow">
              "Reducing plastic waste while building livelihoods."
            </h2>
            <p className="text-lg">
              Project Biothene produces eco-friendly bioplastic bags from biodegradable materials like cornstarch, reducing fossil fuel reliance and environmental impact. These durable bags decompose naturally, mitigating plastic pollution and supporting sustainable waste management.
            </p>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">The Process (4 Steps)</h2>
            <div className="grid grid-cols-4 mt-4 text-center">
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)'}}>
                <div className="text-yellow text-xl font-bold mb-2">1</div>
                <h3 className="heading-sm">Grinding</h3>
              </div>
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)'}}>
                <div className="text-yellow text-xl font-bold mb-2">2</div>
                <h3 className="heading-sm">Melting</h3>
              </div>
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)'}}>
                <div className="text-yellow text-xl font-bold mb-2">3</div>
                <h3 className="heading-sm">Shaping</h3>
              </div>
              <div className="stat-box" style={{backgroundColor: 'var(--color-white)'}}>
                <div className="text-yellow text-xl font-bold mb-2">4</div>
                <h3 className="heading-sm">QC & Pack</h3>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Projected Impact</h2>
            <div className="stats-grid mt-4">
              <div className="stat-box">
                <div className="stat-number">400kg</div>
                <div className="stat-label">Plastic Reduced</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Entrepreneurs</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">80+</div>
                <div className="stat-label">Daily Wage Laborers</div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Timeline</h2>
            <ul className="achievement-list mt-3">
              <li><span className="font-bold">Aug 2025:</span> MoU signed with Packaging Club for bag manufacturing.</li>
              <li><span className="font-bold">Oct 9, 2025:</span> 1st Sales Drive at Dilli Haat, INA — 17 kg sold.</li>
              <li><span className="font-bold">Oct 18, 2025:</span> 2nd Sales Drive at Dilli Haat, INA — 12 kg sold.</li>
              <li><span className="font-bold">Oct 31, 2025:</span> 1st School Awareness Session — School of Excellence.</li>
              <li><span className="font-bold">Nov 6, 2025:</span> 2nd School Awareness Session — Govt Girls SS School, Karol Bagh.</li>
              <li><span className="font-bold">Feb 7, 2026:</span> 3rd Sales Drive at Khan Market — 11 kg sold.</li>
            </ul>
          </div>
          
          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Event Gallery</h2>
            <div className="gallery-placeholder-grid mt-4">
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>Dilli Haat sales drive</span>
              </div>
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>School awareness session</span>
              </div>
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>BIOTHENE product showcase</span>
              </div>
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>Bag production process</span>
              </div>
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>Packaging for sale drive</span>
              </div>
              <div className="gallery-placeholder-item">
                <Camera size={36} />
                <span>Team at Khan Market</span>
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
                { n: '5', label: 'Gender Equality' },
                { n: '6', label: 'Clean Water' },
                { n: '8', label: 'Decent Work' },
                { n: '12', label: 'Responsible Consumption' },
                { n: '13', label: 'Climate Action' },
                { n: '14', label: 'Life Below Water' },
                { n: '15', label: 'Life on Land' },
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
