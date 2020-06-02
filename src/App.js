import React, {useCallback, useEffect, useState} from 'react';
import './styles/App.css';
import AddChoice from "./AddChoice";
import ChoicesList from "./ChoicesList";

const App = () => {
  const CHOICES_LS_KEY = "choices";
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    const choicesFromLS = localStorage.getItem(CHOICES_LS_KEY);

    setChoices(JSON.parse(choicesFromLS) || [])
  }, [CHOICES_LS_KEY]);

  const addNewChoice = useCallback((newChoice) => {
      const updatedChoices = [...choices, newChoice];

      setChoices(updatedChoices);
      localStorage.setItem(CHOICES_LS_KEY, JSON.stringify(updatedChoices))

  }, [choices]);

  const removeChoice = useCallback((choice) => {
    const indexToRemove = choices.findIndex((el) => (
      el === choice
    ))
      const updatedChoices = [...choices]
        updatedChoices.splice(indexToRemove, 1)
    setChoices(updatedChoices);
    localStorage.setItem(CHOICES_LS_KEY, JSON.stringify(updatedChoices))

  });

  return (
    <>
      <h1 className="header">Рандомайзер</h1>
      <div className="container">
        <AddChoice onAddBtnClick={addNewChoice}/>
        <ChoicesList choices={choices} removeChoice={removeChoice}/>
      </div>
    </>
  );
};

export default App;
