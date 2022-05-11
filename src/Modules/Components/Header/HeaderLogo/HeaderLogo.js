import React from 'react'
import style from '../Header.module.css'
export default function HeaderLogo(props) {
  return (
	<div  className={style.logo}>
	  <img width={props.width} height={props.height} src="Images/logoTSS.png" alt='logo'/>
	</div>
  )
}
