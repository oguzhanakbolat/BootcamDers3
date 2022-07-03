import { createContext, useContext, useState } from "react";

const Context = createContext();

const useSetting = () => useContext(Context);

const templates = {
    yellow: {
      color: 'black',
      bg: 'yellow',
      size: 16
    },
    red: {
      color: 'white',
      bg: 'red',
      size: 24
    },
    black: {
      color: 'white',
      bg: 'black',
      size: 24
    },
    blue: {
      color: 'white',
      bg: 'blue',
      size: 16
    }
}

const Provider = ({ children }) => {
    const [template, setTemplate] = useState({
        color: 'white',
        bg: 'blue',
        size: 16
      });
    
      const changeTemplate = value => {
        setTemplate(templates[value]);
      };
    
      const SettingContextValue = {
        template,
        changeTemplate
      }

    return (
        <Context.Provider value={SettingContextValue}>
            { children }
        </Context.Provider>
    )
}

export { useSetting };
export default Provider;