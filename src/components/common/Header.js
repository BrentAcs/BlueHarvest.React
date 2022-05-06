import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
//  const activeStyle = { color: '#F15B2A' };

  return (
    <nav>
      <NavLink end to='/' activestyle={{fontWeight: "bold"}}>
        Home
      </NavLink>
      {' | '}
      <NavLink to='/about' activestyle={{fontWeight: "bold"}}>
        About
      </NavLink>


      {/*{' | '}*/}
      {/*<NavLink to='/starClusters' activeStyle={activeStyle}>*/}
      {/*  Star Clusters*/}
      {/*</NavLink>*/}
      {/*{' | '}*/}
      {/*<NavLink to='/about' activeStyle={activeStyle}>*/}
      {/*  About*/}
      {/*</NavLink>*/}
    </nav>
  );
};

export default Header;
