import React from 'react'
import ReactPlayer from "react-player";


export default function Video() {
  return (
	<div className='container'>
		<div className='ratio ratio-16x9 '>
			<ReactPlayer 
				className='d-flex flex-row justify-content-center alig-items-center'
				url={'https://www.youtube.com/embed/qLyi4-3pUQM'}
				playing={true}	
			/>

		</div>
		
	</div>
  )
}
