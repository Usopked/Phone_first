// src/context/GlobalState.js

import React, { createContext, useReducer, useContext } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  weight: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WEIGHT':
      return {
        ...state,
        weight: state.weight + action.payload,
      };
    case 'RESET_WEIGHT':
      return {
        ...state,
        weight: 0,
      };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);