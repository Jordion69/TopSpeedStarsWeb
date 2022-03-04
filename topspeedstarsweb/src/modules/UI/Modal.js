import { FaGoogle, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import MessageUserUnknown from '../Posts/components/HeaderComponenets/HeaderMessage/MessageUserUnknown'
import LinkRegister from "../Posts/components/HeaderComponenets/HeaderMessage/LinkRegister";

function Modal(props) {
  const {children, onCancel} = props;

  
  function executeConfirm() {
    props.confirm(false);
  }
  function closeModal(){
    props.cancel(false)
  }
  function
  console.log('hello')
  return (
    
    <div className="modal-wrapper">
      <div className="backdrop"></div>
      <div className="modal">
      <div>
      <AiFillCloseCircle onClick={closeModal}/>
    </div>
      <div>
      <label htmlFor="">Email</label>
      <input type="email" />
      </div>
      <div>
      <label htmlFor="">Password</label>
      <input type="password" />
      </div>
        <div className="btn-google">
        <FaGoogle />
          <button className="btn" onClick={executeConfirm}>Login with google</button>
         </div>
         <div className="btn-group">
        <FaArrowAltCircleRight className="btn"onClick={executeConfirm}/>
        </div>
        <div className="hiden show">
          <MessageUserUnknown/>
        </div>
        <div>
          <LinkRegister onClick={executeRegister}/>
        </div>
      </div>
    </div>
  )
}
export default Modal;