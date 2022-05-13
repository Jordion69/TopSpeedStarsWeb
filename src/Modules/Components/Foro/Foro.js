import React from 'react'
import ForoDetails from './ForoDetails'
import ForoList from './ForoList'
import ForoState from '../../context/Foro/ForoState'

export default function Foro() {

  return (
	<ForoState>
	  <ForoList/>
	</ForoState>
  )
}
