import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        localStorage.setItem('darkMode', mode)
        setDarkMode(mode)
    };

    const toggleDarkMode = () => {
        if (darkMode === 'light') {
            setMode('dark');
        } else {
            setMode('light')
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('darkMode');
        if (localTheme) {
            setDarkMode(localTheme);
        } else {
            setMode('light')
        }
        setComponentMounted(true);
    }, []);

    return [darkMode, toggleDarkMode, componentMounted]
};