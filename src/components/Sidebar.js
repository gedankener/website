import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isVisible }) => {
  const topPages = ['Projects', 'Research', 'CV'];
  const middlePages = ['Quotes', 'Books', 'Music', 'Pictures', 'Blog', 'Shows & TV'];
  const bottomPages = ['Leave Me a Note'];

  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <nav>
        <ul>
          {topPages.map((page, index) => (
            <li key={index}><Link to={`/${page.toLowerCase().replace(/ /g, '-')}`}>{page}</Link></li>
          ))}
          <hr />
          {middlePages.map((page, index) => (
            <li key={index}><Link to={`/${page.toLowerCase().replace(/ & /g, '-')}`}>{page}</Link></li>
          ))}
          <hr />
          {bottomPages.map((page, index) => (
            <li key={index}><Link to={`/${page.toLowerCase().replace(/ /g, '-')}`}>{page}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;