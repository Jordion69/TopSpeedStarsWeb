import React from 'react'

export default function LinkRegister(props) {
  return (
	<>
	  <button onClick={props.onClick} href="#noref">{props.children}</button>
	</>
  )
}
