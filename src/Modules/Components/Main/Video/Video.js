import React from 'react'

export default function Video() {
  return (
	<div className='container'>
		<div className=''>
			{/* <video loop autoPlay muted>
				<source src="https://www.youtube.com/watch?v=ChuVhTcXA2c" type="video/mp4" />
			</video> */}
			<iframe className='embed-responsive-item'width="560" height="315" src="https://www.youtube.com/embed/qLyi4-3pUQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>
  )
}
