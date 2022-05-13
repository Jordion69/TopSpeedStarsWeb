import React from 'react'
import style from '../Header.module.css'
import { motion } from 'framer-motion'
export default function HeaderLogo(props) {
  return (
	<div  className={style.logo}>
	  <motion.img 
	  whileHover={{ scale: 1.2}} 
	  animate={{
		  x: [1000, 700, 800, 400, 0],
		  y: [200, 250, 150, 300, 0],
		  opacity: [1, 1, 0, 1, 1]
	  }}
	//   initial={{x: 1000}}
	//   animate={{x: 10}}
	  transition={{delay: 0.2, typ: 'spring', duration: 2}} width={props.width} height={props.height} src="Images/logoTSS.png" alt='logo'/>
	</div>
  )
}
