import React from 'react'

interface BarProps {
    xpFill: number;
}

const Bar = (props: BarProps) => {
    return (
        <div className='bar w-full mt-2'>
            <div className="w-full bg-brown-500 rounded-[4px] p-1">
                <div className="bg-yellow-linear-100 h-[11px] transition-all duration-1000" style={{ width: `${props.xpFill}%` }}></div>
            </div>
        </div>
    )
}

export default Bar
