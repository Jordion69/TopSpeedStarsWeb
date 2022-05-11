import React from 'react'
import HeaderMenu from './HeaderNavBar/HeaderMenu';
import HeaderSocialMedia from './HeaderSocialMedia/HeaderSocialMedia';





export default function HeaderApp(props) {
	



	



  return (
	<>
	<header className='navbar container-fluid row'>
	
	<div className="col-6 bg-dark ">
		<HeaderMenu/>
	</div>
	<div className='col-6 bg-dark d-flex flex-row-reverse'>
		<HeaderSocialMedia/>
	</div>	
	</header>
	</>
	)
}
