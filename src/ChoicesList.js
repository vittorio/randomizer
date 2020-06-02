import React, {useState, useEffect, useCallback} from "react";
import "./styles/Choice.css"

const Choice = ({value}) => {
  const [randomEl, setRandomEl] = useState("");


  const handleClick = useCallback(  () => {
    let choosedEl = value[Math.floor(Math.random() * value.length)];

    setRandomEl(choosedEl)
  }, [value, setRandomEl]);

  return (
    <div>
      <ol>
        {
          value.map(el => (
            //key is not implemented yet
            randomEl == el ?
              <div className="highlighted">
                <li>
                  {randomEl}
                </li>
                <i className="em em-clap" aria-role="presentation" aria-label="CLAPPING HANDS SIGN"></i>
              </div>
              :
              <li>{el}</li>
          ))
        }

      </ol>
      <div className="btnContainer">
        {
          value.length >= 2
            ?
            <button className="chooseBtn" type="button" onClick={handleClick}>Выбрать</button>
            :
            ""
        }
      </div>
    </div>
  )
};
export default Choice