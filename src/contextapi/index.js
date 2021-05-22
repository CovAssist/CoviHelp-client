import React, { useState, createContext } from 'react';
//import csc from 'country-state-city';
export const ContextProvider = createContext();
export const Context = (props) => {
  const [searchBeds, setSearchBeds] = useState();
  //   const [cities] = useState(
  //     csc
  //       .getCitiesOfCountry('IN')
  //       .filter((city) => city.name.toUpperCase().startsWith(searchBeds.toUpperCase()))
  //       .slice(0, 10)
  //   );
  return (
    <ContextProvider.Provider value={{ searchBeds, setSearchBeds }}>
      {props.children}
    </ContextProvider.Provider>
  );
};
