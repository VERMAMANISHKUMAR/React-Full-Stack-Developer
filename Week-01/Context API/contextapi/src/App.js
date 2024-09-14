import React, { createContext, useContext, useState } from 'react';
import './App.css'
// 1. Create the context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    // 2. Use the Provider to pass down the state
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

function Header() {
  // 3. Access the context using useContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>The current theme is {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

function Content() {
  // 4. Another component using the same context
  const { theme } = useContext(ThemeContext);

  return <p style={{ backgroundColor: theme === 'light' ? '#fff' : 'red' }}>This is the content section.</p>;
}
export default App;