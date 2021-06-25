import { useState, useEffect } from 'react';

const DEFAULT_SCREEN_SIZE = 1024;

export const useMediaQueries = () => {
    const [screenSize, setScreen] = useState(DEFAULT_SCREEN_SIZE);
    
    const getWidth = () => setScreen(parseInt(window.innerWidth));

    useEffect(() => {
        //get current width when page loads
        window.addEventListener('load', getWidth);
        window.addEventListener('resize', getWidth);
        return () => {
            window.removeEventListener("resize", getWidth);
            window.removeEventListener('load', getWidth);
        }
    }, []);

    return screenSize;
}
