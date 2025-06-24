import React, { createContext, useContext, useState } from "react";

const RentedContext = createContext<any>(null);

export const useRented = () => useContext(RentedContext);

export const RentedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rentedItems, setRentedItems] = useState<any[]>([]);
  return (
    <RentedContext.Provider value={{ rentedItems, setRentedItems }}>
      {children}
    </RentedContext.Provider>
  );
};