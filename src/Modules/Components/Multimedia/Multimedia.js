import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalTest from '../../Layouts/Modal/ModalTest'
import RegisterForm from '../Forms/RegisterForm'

export default function Multimedia() {

  const [show, setShow] = useState(false)

  const executeConfirm = () => { setShow = true}

  return (
	  <>
	<div>
	  <p>ultimedia</p>
	</div>
  <div>
    <Button
    type='submit'
    >
      Obrir Modal
    </Button>

    {
      show &&
      <ModalTest>
      <RegisterForm/>
      </ModalTest>
    }


    

  </div>
	
  </>
  )
}
