import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import UiEnhancer from './components/UiEnhancer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Project Pages
import ProjectDesi from './pages/projects/ProjectDesi';
import ProjectSneh from './pages/projects/ProjectSneh';
import ProjectBiothene from './pages/projects/ProjectBiothene';
import ProjectTissera from './pages/projects/ProjectTissera';

function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <ScrollProgress />
      <UiEnhancer />
      <BackToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/projects/desi" element={<ProjectDesi />} />
          <Route path="/projects/sneh" element={<ProjectSneh />} />
          <Route path="/projects/biothene" element={<ProjectBiothene />} />
          <Route path="/projects/tissera" element={<ProjectTissera />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
