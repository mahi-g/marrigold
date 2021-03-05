import { useState, useEffect } from 'react';

const MediaQueries = () => {
    const [screenSize, setScreen] = useState(1024);

    const getWidth = () => {
        const width = window.innerWidth;
        setScreen(parseInt(width));
    }
    
    useEffect(() => {
        //get current width when page loads
        window.addEventListener('load', getWidth);

        window.addEventListener('resize', getWidth);
        return () => {
            window.removeEventListener("resize", getWidth);
            window.addEventListener('load', getWidth);
        }
    }, []);
    return screenSize;
}

export default MediaQueries;