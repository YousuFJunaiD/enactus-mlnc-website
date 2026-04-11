import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ 
  title, 
  summary, 
  impactBadge, 
  to, 
  isLive = false 
}) {
  return (
    <article className="project-card">
      <Link to={to} className="project-card-link-overlay" aria-label={`View ${title}`} />
      
      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {isLive && <span className="badge badge-live">Live</span>}
        </div>
        
        <p className="project-card-summary">{summary}</p>
        
        {impactBadge && (
          <div className="project-card-impact">
            <span className="impact-text">{impactBadge}</span>
          </div>
        )}
      </div>
      
      <div className="project-card-footer">
        <span className="project-card-cta">
          Explore Project <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}
