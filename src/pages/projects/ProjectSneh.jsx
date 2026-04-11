import { ArrowLeft, Camera } from 'lucide-react';
import Button from '../../components/Button';
import './ProjectPage.css';

export default function ProjectSneh() {
  return (
    <div className="project-detail-page">
      <section className="project-hero section-bg-dark">
        <div className="container max-w-800 mx-auto">
          <span className="badge badge-live uppercase tracking-wider mb-3 block" style={{width: 'auto', display: 'inline-block'}}>First Enactus India International Sale</span>
          <h1 className="heading-xl mt-2">Project SNEH</h1>
          <p className="project-hero-subtitle text-light">
            Sanitary alternatives, clean water, and women entrepreneurs.
          </p>
          <a href="https://instagram.com/project_sneh" target="_blank" rel="noopener noreferrer" className="contact-social-link mt-4" style={{display: 'inline-flex'}}>
            <Camera size={18} /> @project_sneh
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-800 mx-auto">
          
          <div className="content-block text-center mb-xl">
             <div className="mb-4" style={{backgroundColor: 'var(--color-primary-yellow)', padding: '24px', borderRadius: 'var(--radius-md)', color: 'var(--color-primary-black)'}}>
                 <h2 className="heading-md mb-2">First International Sale in Enactus India History</h2>
                 <p className="font-bold mb-2">November - December 2025</p>
                 <p>Project SNEH successfully exported 50+ handcrafted tote bags to the Canadian market in collaboration with Enactus UPEI and University of Calgary. A powerful proof that student social enterprises can scale globally.</p>
             </div>
             
            <h2 className="project-mission text-yellow mt-5">
              "Better sanitary alternatives than plastic, clean drinking water, and empowering women as entrepreneurs."
            </h2>
            <p className="text-lg">
              Project Sneh aims to offer sustainable alternatives and clean water solutions while empowering underprivileged communities to become visionary entrepreneurs.
            </p>
          </div>

          <div className="content-block">
            <h2 className="heading-md border-bottom pb-2">Our Products</h2>
            <div className="image-gallery mt-4">
              <div className="gallery-img-placeholder" style={{backgroundColor: '#e6e6e6'}}>
                Tote Bags (Real Photos)
              </div>
              <div className="gallery-img-placeholder">Sanitary Napkins</div>
              <div className="gallery-img-placeholder">Cloth Diapers</div>
            </div>
            <p className="text-center mt-3 text-secondary">Products include Tote Bags, Sanitary Napkins, Cloth Diapers, and Ecozyme.</p>
          </div>

          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">Impact & Revenue</h2>
            
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">19K+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">125+</div>
                <div className="stat-label">Micro Entrepreneurs</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">58K+</div>
                <div className="stat-label">Napkins Sold</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">₹14.2L</div>
                <div className="stat-label">Total Revenue</div>
              </div>
            </div>
          </div>
          
          <div className="content-block">
            <h2 className="heading-ld border-bottom pb-2">SDGs Addressed</h2>
            <div className="sdg-icons mt-3">
              {['1', '3', '4', '5', '6', '10', '12', '13', '14', '15'].map(sdg => (
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
