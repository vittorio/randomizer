import React, {useCallback,useRef} from "react";
import './styles/AddChoice.css'


const AddChoice = ({onAddBtnClick}) => {
  const inputRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    const inputEl = inputRef.current;

    if (inputEl && inputEl.value.length) {
      onAddBtnClick(inputEl.value);
      inputEl.value = "";
    }
  }, [onAddBtnClick]);


  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input className="choiceInput" onKeyPress={e => e.stopPropagation()} type="text" ref={inputRef}/>
        <button className="addBtn" type='submit'>Добавить</button>
      </div>
    </form>
  )
};

export default AddChoice;