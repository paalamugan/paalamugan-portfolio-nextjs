import React, { createContext, useReducer } from 'react';

interface ThemeState {
  darkMode: boolean;
}

interface ThemeAction {
  type: 'TOGGLE';
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const INITIAL_STATE: ThemeState = { darkMode: false };

const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
  );
};
