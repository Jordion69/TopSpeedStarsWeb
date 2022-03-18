import React from 'react'

export default function Video() {
  return (
	<div className='container'>
		<div>
			<video loop autoPlay muted>
				<source src="https://www.youtube.com/watch?v=ChuVhTcXA2c" type="video/mp4" />
			</video>
		</div>
	</div>
  )
}
