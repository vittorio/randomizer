import React, {useCallback,useRef} from "react";
import './styles/AddChoice.css'


const AddChoice = ({onAddBtnClick}) => {
  const inputRef = useRef(null);

  const handleClick = useCallback(() => {
    const inputEl = inputRef.current;

    if (inputEl && inputEl.value.length) {
      onAddBtnClick(inputEl.value);
      inputEl.value = "";
    }
  }, [onAddBtnClick]);


  return (
    <form>
      <div className="inputContainer">
        <input className="choiceInput" type="text" ref={inputRef}/>
        <button className="addBtn" type='button' onClick={handleClick}>Добавить</button>
      </div>
    </form>
  )
};

export default AddChoice;