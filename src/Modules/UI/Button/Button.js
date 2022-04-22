import classes from './Button.module.css';

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className=''
      >
      {props.children}
    </button>
  );
}
export default Button;