import React, { useEffect, useState } from 'react'
import XP from '../atoms/XP'
import Bar from '../atoms/Bar';

const XPBar = () => {
    const [xpFill, setXpFill] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => setXpFill(80), 500);
    }, []);

    return (
        <div className='xp-bar w-[600px] sm:w-[90%] flex flex-col items-center'>
            <XP totalXp="50,000" gainedXP={40000} />
            <Bar xpFill={xpFill} />
        </div>
    )
}

export default XPBar
