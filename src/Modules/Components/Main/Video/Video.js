import React from 'react'

export default function Video() {
  return (
	<div className='container'>
		<div>
			<video loop autoPlay muted>
				<source src="" type="video/mp4" />
			</video>
		</div>
	</div>
  )
}
