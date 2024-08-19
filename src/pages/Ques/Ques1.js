import React from 'react';
import luffy from '../../luffy.svg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../../context/GlobalState';
import './Ques.css';

const Ques1 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/ques2');
  };

  return (
    <div className="ques-container">
      <img src={luffy} className="App-luffy" alt="luffy" />
      <h1 className="ques-content">	일 또는 여가 활동을 하는데 흥미나 즐거움을 느끼지 못함</h1>
      <div className="button-container">
        <button onClick={() => handleOptionClick(0)} className="custom-button">전혀 방해받지 않았다.</button>
        <button onClick={() => handleOptionClick(1)} className="custom-button">며칠동안 방해받았다.</button>
        <button onClick={() => handleOptionClick(2)} className="custom-button">7일 이상 방해받았다.</button>
        <button onClick={() => handleOptionClick(3)} className="custom-button">거의 매일 방해받았다.</button>
      </div>
    </div>
  );
};

export default Ques1;