import React from 'react'
import { Button } from 'react-bootstrap'
import ForoListDetails from './ForoListDetails'

export default function ForoDetails() {
  return (
	<div>
	  <Button
	  style={{position: 'fixed', top: '50%', right: 0}}
	  >Responder</Button>
	  <ForoListDetails/>
	</div>
  )
}
