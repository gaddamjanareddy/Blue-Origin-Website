// src/context/FontContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState(() => {
    return localStorage.getItem('selectedFont') || 'default';
  });

  useEffect(() => {
    // Apply font globally to the entire body based on selectedFont
    switch (selectedFont) {
      case 'atkinson-hyperlegible':
        document.body.style.fontFamily = `'Atkinson Hyperlegible', sans-serif`;
        break;
      case 'open-dyslexic':
        document.body.style.fontFamily = `'OpenDyslexic', sans-serif`;
        break;
      default:
        document.body.style.fontFamily = `'Orbitron', sans-serif`; // your default
    }

    // Save font preference to localStorage
    localStorage.setItem('selectedFont', selectedFont);
  }, [selectedFont]);

  return (
    <FontContext.Provider value={{ selectedFont, setSelectedFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
