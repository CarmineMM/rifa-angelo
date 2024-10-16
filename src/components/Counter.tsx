import { useEffect, useState } from 'react';

export default function Counter() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContador((prevContador) => (prevContador + 1) % 100);
        }, 50);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <h4 className='text-9xl text-primary font-bold mb-6'>{String(contador).padStart(2, '0')}</h4>
    )
}
