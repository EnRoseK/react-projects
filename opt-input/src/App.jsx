import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css';

const token = 1234;

const App = () => {
  const inputParent = useRef(null);
  const value = useRef('');

  useEffect(() => {
    inputParent.current.childNodes[0].focus();
  }, []);

  const handleInput = (e) => {
    value.current += e.target.value;
    value.current.length < 4
      ? inputParent.current.childNodes[value.current.length].focus()
      : (inputParent.current.childNodes[3].value = inputParent.current.childNodes[3].value[0]);
  };

  const handleFocus = () => {
    value.current.length >= 4
      ? inputParent.current.childNodes[3].focus()
      : inputParent.current.childNodes[value.current.length].focus();
  };

  return (
    <div className='otp-example' ref={inputParent}>
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
    </div>
  );
};

export default App;
