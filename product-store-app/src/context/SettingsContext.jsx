import { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();
const SettingsDispatchContext = createContext();

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  view: 'grid',
  category: 'all',
  search: '',
  sortBy: 'default',
};

function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme);
      return { ...state, theme: newTheme };
    case "SET_VIEW":
      return { ...state, view: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

export function useSettingsDispatch() {
  return useContext(SettingsDispatchContext);
}