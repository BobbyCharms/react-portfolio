import React, { useState, useEffect } from 'react';
import About from '../pages/About';

export default function Body() {
  const [currentPage, setCurrentPage] = useState('#about');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
      return <About />;
    }
    
  return (
    <div>
      {renderPage()}
    </div>
  );
}