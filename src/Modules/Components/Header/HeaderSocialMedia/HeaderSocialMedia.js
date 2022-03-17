import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { Dropdown } from 'rsuite';
import HeaderUserLogin from '../HeaderNavBar/HeaderUserLogin';
export default function HeaderSocialMedia() {

	const handlerClick = () => {

	}
  return (
	<div className='icons'>
	<ul className='d-flex flex-row align-items-center'>
		<li><FaInstagram
			onClick={handlerClick}
		/></li>
		<li className='nav-link fw-light fs-6'><FaTwitter/></li>
		<li className='nav-link fw-light fs-6'><FaFacebook/></li>
		<li className='nav-link fw-light fs-6'><FaYoutube/></li>
		<li className='nav-link fw-light fs-6'><Dropdown title={<GiWorld/>}>
			<Dropdown.Item>Catalan</Dropdown.Item>
			<Dropdown.Item>English</Dropdown.Item>
		</Dropdown></li>
		<li className='nav-link fw-light fs-6'>
			<HeaderUserLogin/>
		</li>
		
	</ul>
	<div>
	</div>


	  
	</div>
  )
}
