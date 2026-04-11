import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page section-bg-dark">
      <div className="container text-center">
        <h1 className="error-code text-yellow">404</h1>
        <h2 className="heading-md mb-4 text-white">Page Not Found</h2>
        <p className="text-light mb-lg max-w-800 mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="not-found-actions">
          <Button to="/" variant="primary">
            <ArrowLeft size={18} style={{ marginRight: '8px' }}/> Back to Home
          </Button>
          <Button to="/projects" variant="outline">
            Explore Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
