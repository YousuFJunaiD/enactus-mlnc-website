import { ArrowLeft, Camera } from 'lucide-react';
import Button from '../../components/Button';
import './ProjectPage.css';

export default function ProjectTissera() {
  return (
    <div className="project-detail-page">
      <section className="project-hero section-bg-dark">
        <div className="container max-w-800 mx-auto">
          <h1 className="heading-xl mt-2">Project TISSERA</h1>
          <p className="project-hero-subtitle text-light">
            Transforming textile waste into sustainable value-added products.
          </p>
          <a href="https://instagram.com/project_tissera" target="_blank" rel="noopener noreferrer" className="contact-social-link mt-4" style={{display: 'inline-flex'}}>
            <Camera size={18} /> @project_tissera
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-800 mx-auto">
          
          <div className="content-block text-center mb-xl">
             <div className="mb-4" style={{display: 'inline-block', backgroundColor: 'rgba(245, 166, 35, 0.15)', padding: '8px 16px', borderRadius: 'var(--radius-sm)', color: '#b57710', fontWeight: 'bold', border: '1px solid currentColor'}}>
                 PROJECT IS LIVE
             </div>
            <h2 className="project-mission text-yellow mt-2">
              "A future where waste becomes opportunity, communities grow stronger, and sustainability is woven into everyday life."
            </h2>
            <p className="text-lg">
              Conceived in 2025, Project Tissera focuses on recycling discarded cotton and other fabrics to create eco-friendly alternatives. By addressing India's mounting 7.8 million tonnes of annual textile waste, the project contributes to a circular economy and reduces landfill pressure.
            </p>
            <br />
            <p className="text-lg">
               Beyond sustainability, Project Tissera is rooted in social impact — it actively empowers women from underprivileged communities, providing them with livelihood opportunities, skills, and financial independence.
            </p>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Impact & Activity</h2>
            
            <div className="stats-grid mt-4">
              <div className="stat-box">
                <div className="stat-number">7.8M</div>
                <div className="stat-label">Tonnes of Waste Addressed</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">₹35K+</div>
                <div className="stat-label">Revenue since August 2025</div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Timeline</h2>
            <ul className="achievement-list mt-3">
              <li><span className="font-bold">Aug 2025:</span> Project launched.</li>
              <li><span className="font-bold">Sep 4, 2025:</span> First sales transaction — Cloth Box Foundation.</li>
              <li><span className="font-bold">Oct 1, 2025:</span> Sales transaction — Cloth Box Foundation.</li>
              <li><span className="font-bold">Oct 7, 2025:</span> 1st Sales Drive.</li>
              <li><span className="font-bold">Nov 21, 2025:</span> 2nd Sales Drive.</li>
              <li><span className="font-bold">Nov 23, 2025:</span> Milestone exceeding ₹21,500 reached.</li>
            </ul>
          </div>
          
          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">SDGs Addressed</h2>
            <div className="sdg-icons mt-3">
              {['1', '5', '8', '10', '12', '13'].map(sdg => (
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
