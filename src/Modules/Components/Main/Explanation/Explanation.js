import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function Explanation() {
  return (

	<>

	<Container className='mt-4'>
	<Row className='row'>
	<Col lg={2}/>
		<Col lg={8} className='text-center'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum nostrum impedit deserunt eius sequi placeat dolores et commodi ut? Delectus eligendi commodi at eaque ut dolorem, inventore debitis facere eius cupiditate consequuntur ex voluptatum quis doloremque dolore distinctio nisi esse rem tenetur? Recusandae voluptates ipsum aliquam iure accusantium sed.
			</p>
		</Col>

		<Col lg={2}/>
		{/* <div className='col-12 col-lg-4'>
			<img src="Images/Recurso1.svg" className='img-fluid' alt='logo'/>
		</div> */}
	</Row>
	  
	</Container>
	</>
  )
}
