import { useEffect, useState } from 'react';
import './themeToggle.css'

function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
      <button className='theme-toggle' onClick={toggleTheme}>
        {theme === 'light' ? '' : ''}
      </button>
    );
}

export default ThemeToggle;