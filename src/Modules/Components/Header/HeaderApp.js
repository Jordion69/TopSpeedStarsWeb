import React from 'react'
import { useState } from 'react'
import HeaderMenu from './HeaderNavBar/HeaderMenu';
import HeaderSocialMedia from './HeaderSocialMedia/HeaderSocialMedia';
import HeaderUserLogin from './HeaderNavBar/HeaderUserLogin';


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
	<header className='navbar container-fluid row'>
	
	<div className="col-6 bg-dark ">
		<HeaderMenu items={MENU}/>
	</div>
	<div className='col-6 bg-dark d-flex flex-row-reverse'>
		<HeaderSocialMedia/>
	</div>	
	</header>
	</>
	)
}
