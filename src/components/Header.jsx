import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <Flame size={28} color="#C2185B" />
          Burn <span>IT Out</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/programs" className={isActive('/programs')}>Programs</Link>
          <Link to="/success-stories" className={isActive('/success-stories')}>Success Stories</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/programs" className="btn btn-primary">Enroll Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
