import { useState, useEffect } from 'react';

const MediaQueries = () => {
    const [screenSize, setScreen] = useState(1024);

    const getWidth = () => {
        const width = window.innerWidth;
        setScreen(parseInt(width));
        console.log("getwidth", width);
    }
    const onloadtest = () => {
        const width = window.innerWidth;
        setScreen(parseInt(width));
        console.log("onload", width);
    }
    useEffect(() => {
        //get current width when page loads
        window.addEventListener('load', onloadtest);

        window.addEventListener('resize', getWidth);
        return () => {
            window.removeEventListener("resize", getWidth);
            window.addEventListener('load', onloadtest);
        }
    }, []);
    return screenSize;
}

export default MediaQueries;