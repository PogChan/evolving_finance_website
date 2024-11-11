// Libs
import { create } from 'zustand'

// Define the Zustand store interface
interface AppState {
  burgerMenu: boolean
  setBurgerMenu: (value: boolean) => void
}

// Create Zustand store
export const useAppContext = create<AppState>((set) => ({
  burgerMenu: false, // initial state for burgerMenu
  setBurgerMenu: (value: boolean) => set({ burgerMenu: value }), // function to update burgerMenu
}))
