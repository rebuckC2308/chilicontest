/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-restricted-syntax */
import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }
  return { Context, Provider };
};
