import React, { createContext, useContext, useState } from 'react';

const SummonContext = createContext();

export const SummonProvider = ({ children }) => {
  const [summonData, _setSummonData] = useState({});

  const setSummonData = (newData) => {
    _setSummonData(newData);
  };

  return (
    <SummonContext.Provider value={{ summonData, setSummonData }}>
      {children}
    </SummonContext.Provider>
  );
};

export const useSummonContext = () => {
  return useContext(SummonContext);
};
