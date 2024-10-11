import React from 'react'
import { IoClose } from "react-icons/io5";

interface CloseButtonProps{
    onClose: ()=> void;
}

const CloseButton = (props: CloseButtonProps) => {
    return (
        <button onClick={props.onClose} className='border-2 border-white text-white font-bold w-[20px] h-[20px] flex justify-center items-center rounded-md'>
            <IoClose />
        </button>
    )
}

export default CloseButton
