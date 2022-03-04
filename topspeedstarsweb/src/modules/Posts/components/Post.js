import Modal from '../../UI/Modal';
import { useState } from 'react';
import PostImage from './PostImage';

function Post(props) {
  const {image} = props;
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen)

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  function removeHandler() {
    openModal();
  }

  return (
    <div>
     
      <li onClick={removeHandler}>
        <div className="image-container"><PostImage src={image} /></div>
        <p>{props.text}</p>
      </li>
      {
        modalOpen && 
        <Modal onCancel={closeModal}>
          <PostImage src={image} />
        </Modal>
      }
    </div>
  )
}
export default Post;