import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import LevelUpFooter from './LevelUpFooter';
import AnimationSound from '../atoms/AnimationSound';
import XPBar from './XPBar';

interface LevelupPopupProps {
    onClose: () => void
}

const LevelupPopup = (props: LevelupPopupProps) => {

    return (
        <div className='min-h-screen bg-black absolute top-0 left-0 w-full bg-[url(/level-up-bg.png)] bg-cover bg-top flex items-center flex-col py-[100px] sm:py-[30px]'>
            <h1 className='bg-yellow-radial font-extrabold text-[80px] sm:text-[50px] drop-shadow-xl text-transparent bg-clip-text'>LEVEL UP</h1>
            <div className='logo-box mt-4'>
                <Image src="/logo.png" width={150} height={150} alt='Logo' className='animate-bounce-in-bck' />
            </div>
            <h1 className='text-brown-400 text-[50px] sm:text-[25px] font-bold mt-10 sm:mt-5 drop-shadow-lg mb-[-20px]'>Corporal</h1>
            <XPBar />
            <div className='mt-8'>
                <Button title='Claim NFT Badge' handleClick={props.onClose} />
            </div>
            <LevelUpFooter />
            <AnimationSound src='/music.wav'/>
        </div>
    )
}

export default LevelupPopup
