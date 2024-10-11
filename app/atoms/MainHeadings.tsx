import React from 'react'

interface MainHeadingsProps {
    h1: string;
    h2: string;
}

const MainHeadings = (props: MainHeadingsProps) => {
    return (
        <div className='headings mt-3 text-yellow-300 flex flex-col items-center'>
            <h1 className='font-extrabold text-[44px] sm:text-[30px]'>{props.h1}</h1>
            <h2 className='font-medium text-center text-[30px] sm:text-[20px]'>{props.h2}</h2>
        </div>
    )
}

export default MainHeadings
