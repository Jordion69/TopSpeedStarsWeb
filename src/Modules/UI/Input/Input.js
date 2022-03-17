import { useEffect, useState } from 'react';

function Input(props) {
    const [prevValInput, setPrevValInput] = useState(props.startVal);
    const [valInput, setValInput] = useState(props.startVal);
    const [valIsValid, setValIsValid] = useState(null);

    const { timeout } = props.timer

    useEffect(() => {
        if (prevValInput === valInput) {
            return;
        }
        const timer = setTimeout(() => {
            console.log('UseEffect running');
            setPrevValInput(valInput);
            setValIsValid(props.validation(valInput));
        }, timeout ? timer : 500);

        return () => {
            console.log('Effect cleanup!');
            clearTimeout(timer);
        }
    }, [valInput, prevValInput]);

    const valOnChangeHandler = (e) => setValInput(e.target.value);

    return (
        <>
            <label
			htmlFor={props.id}>
			{props.label}
			</label>
            <input 
			type={props.type} 
			id={props.id} 
			name={props.id} 
			placeholder={props.placeholder} 
			value={valInput} 
			onChange={valOnChangeHandler} 
			onBlur={props.onBlur ? props.onBlur : null} 
			className={valIsValid === false ? props.invalid : ''}
			 />
        </>
    )
}

export default Input;
