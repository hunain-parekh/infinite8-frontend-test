import React from 'react'
import CountUp from 'react-countup'

interface XPProps {
    totalXp: string;
    gainedXP: number;
}

const XP = (props: XPProps) => {
    return (
        <div className='title flex justify-between w-full font-bold text-[18px] text-white'>
            <p>XP: <span className='text-orange-100'><CountUp end={props.gainedXP} /></span></p>
            <p>{props.totalXp}</p>
        </div>
    )
}

export default XP
