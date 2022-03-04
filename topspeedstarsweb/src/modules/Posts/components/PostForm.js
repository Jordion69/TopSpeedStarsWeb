import { useState } from 'react';

function PostForm(props) {
  const [inputText, setInputText] = useState('');
  const [inputURL, setInputURL] = useState('');

  const textChangeHandler = event => setInputText(event.target.value); 
  
  const urlChangeHandler = event => setInputURL(event.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const post = {
      text: inputText,
      image: inputURL,
    };

    props.onSaveData(post);
    setInputText('');
    setInputURL('');
  }

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input
        type="text"
        value={inputText}
        onChange={textChangeHandler}
      />
      <input
        type="text"
        value={inputURL}
        onChange={urlChangeHandler}
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}
export default PostForm;