// Libs
import React, { createContext, useContext, useState, ReactNode, FC, SetStateAction, Dispatch } from 'react'
import { initialState } from './initial-state'

// Interface
interface IAppContext {
  burgerMenu: boolean
  setBurgerMenu: Dispatch<SetStateAction<boolean>>
}

// Create context
const AppContext = createContext<IAppContext>({
  burgerMenu: initialState.burgerMenu,
  setBurgerMenu: (value) => value,
})

// Provider
export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Burger menu
  const [burgerMenu, setBurgerMenu] = useState<IAppContext['burgerMenu']>(initialState.burgerMenu)

  // Value
  const value = {
    burgerMenu,
    setBurgerMenu,
  }

  // Provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Hook context
export const useAppContext = () => useContext(AppContext)
