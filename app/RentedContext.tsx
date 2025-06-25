import React, { createContext, useContext, useState } from "react";

export interface RentedItem {
  bike: any;
  renterInfo: {
    quantity: number; firstName: string; lastName: string; address: string 
};
}

const RentedContext = createContext<{
  rentedItems: RentedItem[];
  setRentedItems: React.Dispatch<React.SetStateAction<RentedItem[]>>;
} | null>(null);

export const useRented = () => {
  const ctx = useContext(RentedContext);
  if (!ctx) throw new Error("useRented must be used within a RentedProvider");
  return ctx;
};

export const RentedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rentedItems, setRentedItems] = useState<RentedItem[]>([]);
  return (
    <RentedContext.Provider value={{ rentedItems, setRentedItems }}>
      {children}
    </RentedContext.Provider>
  );
};