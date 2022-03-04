import React from 'react'
import { useState } from 'react'
import HeaderLogo from './components/HeaderComponenets/HeaderLogo/HeaderLogo';
import HeaderMenu from './components/HeaderComponenets/HeaderNavBar/HeaderMenu';
import HeaderSocialMedia from './components/HeaderComponenets/HeaderSocialMedia/HeaderSocialMedia';

import HeaderUserLogin from './components/HeaderComponenets/HeaderNavBar/HeaderUserLogin';


const MENU = [
	{id: 1, title: "Foro"},
	{id: 2, title: "Blog"},
	{id: 3, title: "Ranking"},
	{id: 4, title: "Multimedia"},
] 

const ICONS = [
	{id: 1, icon: "Facebook", href: "#"},
	{id: 2, icon: "Instagram", href: "#"},
	{id: 3, icon: "Twitter", href: "#"},
	{id: 4, icon: "Youtube", href: "#"},
]

export default function HeaderApp(props) {
	const [links, setLinks] = useState(MENU);
	const [icons, setIcons] = useState(ICONS);



	



  return (
	<>
	<header className='header'>
	<HeaderLogo />
	<div className="container">
	<HeaderSocialMedia/>
	<HeaderMenu items={MENU}/>
	<HeaderUserLogin/>
	</div>	
	</header>
	</>
	)
}
