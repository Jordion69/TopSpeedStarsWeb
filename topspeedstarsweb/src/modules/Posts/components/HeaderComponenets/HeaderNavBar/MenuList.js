import React from 'react'


export default function MenuList(props) {

	const changehandler = () => {

	}

	
  return (
	  <>
	<div>
	<li onClick={changehandler}><a href="#">{props.title}</a></li>
	  
	</div>
	
	</>
  )
}
