import React from 'react';
import MenuList from './MenuList';
import NavbarCSS from '../Header.module.css'

export default function HeaderMenu(props) {
  return (
	  
	<div className={NavbarCSS.navbar}>
	  <ul className='menuList'>
		{props.items.map((item) => <MenuList key ={item.id} title = {item.title}/>)}
	  </ul>
	</div>
  )
}
