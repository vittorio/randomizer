import React, {useState, useCallback} from "react";
import "./styles/ChoicesList.css"

const ChoicesList = ({choices, removeChoice, onSelect, randomChoice}) => {
  return (
    <div tabIndex="0">
      <ol className="choicesList">
        {
          choices.map(choice => (
            //key is not implemented yet
            randomChoice === choice ?
              <div className="highlighted" key={choice}>
                <li>
                  {randomChoice}
                </li>
                <i className="em em-clap" aria-role="presentation" aria-label="CLAPPING HANDS SIGN"/>
                <input type="checkbox"  onChange={() => removeChoice(choice)}/>
              </div>
              :

              <li key={choice}>
                {choice}
                <input type="checkbox" onChange={() => removeChoice(choice)}/>
              </li>
          ))
        }

      </ol>
      <div className="btnContainer">
        {
          choices.length >= 2
          &&
          <button className="chooseBtn" type="button" onClick={onSelect}>Выбрать</button>
        }
      </div>
    </div>
  )
};
export default ChoicesList
