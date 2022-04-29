import React from 'react'
import { FaUserAlt, FaUserCheck } from 'react-icons/fa'
import { useState } from 'react';
import Modal from '../../../UI/Modal/Modal';
import Button from '../../../UI/Button/Button';
import LogInForm from '../../Forms/logInForm';
import RegisterForm from '../../Forms/RegisterForm'


export default function HeaderUserLogin() {

	const [logInModalOpen, setLogInModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

	const openLogInModal = () => setLogInModalOpen(true);
	const logIncloseModal = () => setLogInModalOpen(false);
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const auth =false;

function closeLogInModal() {
  console.log('closing logIn modal');
  logIncloseModal()
}

function openRegisterModalFunc() {
  console.log('opening register modal');
  openRegisterModal();
}

  const removeHandler = () => {
    openLogInModal();
  }
  const removeLogin = () => {
    openLogInModal();
  }



  return (
	
	  <div>

    {!auth? 
      <Button className="w-1.5" onClick={removeHandler}>
        <FaUserAlt style={{color: 'red', fontSize:'1em'}}></FaUserAlt>
      </Button> :
      <Button>
        <FaUserCheck style={{color: 'red', fontSize:'1em'}} className="" onClick={removeLogin}/>
      </Button>  }
      {	
        
        logInModalOpen && 
        <Modal className="bg-light" cancel={closeLogInModal}  onClose={closeLogInModal} confirm={setLogInModalOpen}>
          <LogInForm cancel={closeLogInModal} registerOpener={openRegisterModalFunc}></LogInForm>
        </Modal>
        
      }
      {	
        registerModalOpen && 
        <Modal cancel={closeRegisterModal} onClose={closeRegisterModal} confirm={setLogInModalOpen}>
          <RegisterForm cancel={closeRegisterModal} logInOpener={openLogInModal}></RegisterForm>
        </Modal>
      }
	</div>
	
  )
}
