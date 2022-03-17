import React from 'react'
import HeaderSocialMedia from '../Header/HeaderSocialMedia/HeaderSocialMedia'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
	  <>
	<div>
	  <HeaderSocialMedia/>
	</div>
	<div>
	<Link to="/avisos-privacidad">Aviso de privacidad</Link> |{" "}
        <Link to="/terminos-uso">Terminos de uso</Link> |{" "}
        <Link to="/politica-cookies">Politica de cookies</Link> |{" "}
        <Link to="/informacion-empresa">Información de empresa</Link>
        
	</div>
	</>
  )
}
