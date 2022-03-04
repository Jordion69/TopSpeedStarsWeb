import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function HeaderSocialMedia() {
  return (
	<div className='icons'>
	<ul className='position-icons'>
		<li><FaInstagram/></li>
		<li><FaTwitter/></li>
		<li><FaFacebook/></li>
		<li><FaYoutube/></li>
	</ul>

	  
	</div>
  )
}
