import React, {useState, useCallback} from "react";
import "./styles/ChoicesList.css"

const ChoicesList = ({choices, removeChoice}) => {
  const [randomChoice, setRandomChoice] = useState("");


  const handleClick = useCallback(() => {
    const chosenEl = choices[Math.floor(Math.random() * choices.length)];

    setRandomChoice(chosenEl)
  }, [choices, setRandomChoice]);

  return (
    <div>
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
          <button className="chooseBtn" type="button" onClick={handleClick}>Выбрать</button>
        }
      </div>
    </div>
  )
};
export default ChoicesList
