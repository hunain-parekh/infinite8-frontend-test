import React from 'react'
import CloseButton from '../atoms/CloseButton'
import MainHeadings from '../atoms/MainHeadings'
import AnimationSound from '../atoms/AnimationSound'
import Rewards from './Rewards'
import { Reward } from '../types/Reward'

interface RewardsProps {
    onClose: () => void
}

const rewards: Reward[] = [
    { image: '/xp.png', title: 'XP', animation: 'animate-roll-in-blurred-left' },
    { image: '/coins.png', title: 'Coins', animation: 'animate-roll-in-blurred-right' }
]

const RewardsPopup = (props: RewardsProps) => {
    return (
        <div className='bg-black absolute w-full top-0 left-0 flex justify-center items-center py-[100px] sm:py-[50px]'>
            <div className='w-[60%] sm:w-[90%] bg-[url(/rewards-bg.png)] bg-cover bg-top rounded-[20px] border-2 border-border-rewards'>
                <div className='w-full h-full bg-black-linear rounded-[20px] p-5 pb-16 flex flex-col items-center'>
                    <div className='flex justify-end w-full'>
                        <CloseButton onClose={props.onClose} />
                    </div>

                    <MainHeadings h1='Congratulations!' h2='Command completed Successfully!' />

                    <div className='text-[18px] font-normal text-light-brown-200 mt-8 text-center w-[90%] sm:w-[100%] sm:text-justify'>
                        <p>You have successfully completed a command! Here are your well-earned rewards. Keep exploring the Command Center roe even more exciting mission and bigger rewards!</p>
                        <p className="text-center">You have gained:</p>
                    </div>

                    <Rewards rewards={rewards}/>
                </div>
            </div>
            <AnimationSound src='/rewards.mp3' />
        </div>
    )
}

export default RewardsPopup
