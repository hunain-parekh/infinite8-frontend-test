import React from 'react'

interface NFTButtonProps {
    handleClick: () => void
    title:string;
}

const Button = (props: NFTButtonProps) => {
    return (
        <button
            onClick={props.handleClick}
            className='bg-orange-linear-100 w-[230px] h-[50px] rounded-[6px] border border-brown-500 font-bold text-brown-500 text-[20px] hover:scale-110'
        >{props.title}</button>
    )
}

export default Button
