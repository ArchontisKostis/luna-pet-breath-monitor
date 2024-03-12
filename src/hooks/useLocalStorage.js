import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        // Retrieve value from local storage
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        // Save value to local storage
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;