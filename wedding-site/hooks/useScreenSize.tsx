import { useState, useEffect } from 'react';

interface UseScreenSize {
    width: number;
}

export const useScreenSize = (): UseScreenSize => {
    const [screenSize, setScreenSize] = useState<UseScreenSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            });
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return screenSize;
};

export default useScreenSize;
