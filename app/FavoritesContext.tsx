import React, { createContext, ReactNode, useContext, useState } from 'react';

type Motorcycle = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type FavoritesContextType = {
  favorites: Motorcycle[];
  toggleFavorite: (bike: Motorcycle) => void;
  isFavorited: (bike: Motorcycle) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Motorcycle[]>([]);

  const toggleFavorite = (bike: Motorcycle) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.id === bike.id)) {
        return prev.filter((item) => item.id !== bike.id);
      } else {
        return [...prev, bike];
      }
    });
  };

  const isFavorited = (bike: Motorcycle) => {
    return favorites.some((item) => item.id === bike.id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};