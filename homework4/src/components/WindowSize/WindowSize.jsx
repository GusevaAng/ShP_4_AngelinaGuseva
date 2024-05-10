import { useState , useEffect } from "react";

const WindowSize = () => {

    const windowSize = {width: window.innerWidth, height: window.innerHeight}
    const [size, setSize] = useState(windowSize);

    useEffect(() => {
        const handleResize = (event) => {
            const resize = {
                width: event.target.innerWidth, 
                height: event.target.innerHeight}
            setSize(resize);
        

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        };
    }, []);
}



export default WindowSize