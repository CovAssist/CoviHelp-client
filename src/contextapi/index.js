import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();
export const Context = (props) => {
  return <ContextProvider.Provider value={{}}>{props.children}</ContextProvider.Provider>;
};
