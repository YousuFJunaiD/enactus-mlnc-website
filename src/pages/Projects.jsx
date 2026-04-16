import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import SectionContainer from '../components/SectionContainer';
import './Projects.css';

export default function Projects() {
  useEffect(() => {
    document.title = 'Our Projects | Enactus MLNC';
  }, []);
  return (
    <div className="projects-page">
      <PageHero
        className="projects-hero"
        badge="Real-World Impact"
        title="Our Projects"
        kicker="Entrepreneurial solutions built to solve problems that matter."
        description="From animal welfare and sustainable alternatives to women's empowerment and circular economy."
      />

      <section className="section section-bg-offwhite">
        <SectionContainer>
          <div className="grid grid-cols-2 gap-large">
            <ProjectCard
              to="/projects/desi"
              title="Project DESI"
              summary="Duty to Empathize, Sterilize, and Immunize. Aiming to eradicate canine rabies, eliminate starvation and reduce road accidents among stray dogs."
              impactBadge="₹2.2L Revenue · 2,200 Dogs Immunized"
              isLive={true}
            />
            <ProjectCard
              to="/projects/sneh"
              title="Project SNEH"
              summary="Offering sanitary alternatives to plastic and providing clean drinking water, while empowering underprivileged communities as micro-entrepreneurs."
              impactBadge="₹14.2L Revenue"
              isLive={true}
            />
            <ProjectCard
              to="/projects/biothene"
              title="Project BIOTHENE"
              summary="Producing eco-friendly bioplastic bags from biodegradable materials like cornstarch, mitigating plastic pollution."
              impactBadge="400kg plastic reduced"
              isLive={true}
            />
            <ProjectCard
              to="/projects/tissera"
              title="Project TISSERA"
              summary="Transforming textile waste into sustainable value-added products like recycled cotton bags, empowering women from underprivileged communities."
              impactBadge="₹35,000+"
              isLive={true}
            />
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
