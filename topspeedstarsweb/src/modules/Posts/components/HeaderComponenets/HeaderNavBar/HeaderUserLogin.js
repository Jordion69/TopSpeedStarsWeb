import React from 'react'
import { FaUserAlt, FaUserCheck } from 'react-icons/fa'
import { useState } from 'react';
import Modal from '../../../../UI/Modal';



export default function HeaderUserLogin() {

	const [modalOpen, setModalOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);
  const openModalLogin = () => setModalLoginOpen(true);
  const closeModalLogin = () => setModalLoginOpen(false);



  const removeHandler = () => {
    openModal();
  }
  const removeLogin = () => {
    openModalLogin();
  }

  return (
	
	  <div>

		 <FaUserAlt className="btn overlay remove-btn"
      onClick={removeHandler}></FaUserAlt>
      <FaUserCheck onClick={removeLogin}/>

		{	
        modalOpen && 
        <Modal cancel={closeModal} confirm={setModalOpen}>
          
          
        </Modal>
      }
	</div>
	
  )
}
