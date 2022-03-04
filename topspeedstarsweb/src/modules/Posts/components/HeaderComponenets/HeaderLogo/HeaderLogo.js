import React from 'react'
import HeaderLogoCSS from '../Header.module.css'
export default function HeaderLogo() {
  return (
	<div className={HeaderLogoCSS.logo}>
	  <img src="Images/logo.jpg" alt=''/>
	</div>
  )
}
