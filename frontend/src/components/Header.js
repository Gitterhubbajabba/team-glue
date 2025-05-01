import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-banner ${scrollPosition > 10 ? 'fade-out' : ''}`}>
      <div className="banner-section banner-left clickable">
        <div className="banner-text name">MALIKHA ARJUNAN</div>
        <div className="banner-text id">RA2211027010254</div>
      </div>
      
      <div className="banner-section banner-center clickable">
        <div className="banner-text name"></div>
        <div className="banner-text id"></div>
      </div>
      
      <Link to="/members" style={{ textDecoration: 'none' }}>
        <div className="banner-section banner-right clickable">
          <div className="banner-text name"></div>
          <div className="banner-text id"></div>
        </div>
      </Link>
    </div>
  );
};

export default Header;