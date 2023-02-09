import { Link } from 'react-router-dom';

export function HBTNavbarRight() {
  return (
    <div>
      <Link to="/login" className="btn btn-outline-primary me-2">
        Login
      </Link>
      <Link to="/signup" className="btn btn-primary">
        Sign-up
      </Link>
    </div>
  );
}
