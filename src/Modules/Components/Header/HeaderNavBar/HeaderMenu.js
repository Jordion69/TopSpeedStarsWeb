import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

export default function HeaderMenu(props) {
  return (
	  
	<div className=''>
	  
		<ul className='d-flex flex-row align-items-center'>
      <li className='nav-item'><Link to="/" className=''><HeaderLogo/></Link></li>
      <li className='nav-item'><Link to="/foro" className='nav-link fw-light fs-6'>Foro</Link> </li>
      <li className='nav-item'> <Link to="/blog"className='nav-link fw-light fs-6'>Blog</Link> </li>
      <li className='nav-item'><Link to="/ranking" className='nav-link fw-light fs-6'>Ranking</Link></li>
      <li className='nav-item'><Link to="/multimedia" className='nav-link fw-light fs-6'>Multimedia</Link></li>
    </ul>
    
  </div>
  )
}
