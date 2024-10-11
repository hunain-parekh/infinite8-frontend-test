import React from 'react'
import Image from 'next/image'
import { Reward } from '../types/Reward'

interface RewardsProps {
    rewards: Reward[]
}

const Rewards = (props: RewardsProps) => {
    return (
        <>
            <div className='mt-10 flex gap-3 items-center w-[50%] justify-center'>
                <Image src="/b-line-1.png" width={200} height={30} alt='Line 1' className="sm:w-[100px]"/>
                <p className='text-white text-[20px]'>Rewards</p>
                <Image src="/b-line-2.png" width={200} height={30} alt='Line 2' className="sm:w-[100px]"/>
            </div>
            <div className='images flex gap-8 mt-10'>
                {props.rewards.length > 0 && props.rewards.map((reward: Reward) => <Image src={reward.image} width={100} height={100} alt={reward.title} className={`${reward.animation}`} />)}
            </div>
        </>
    )
}

export default Rewards
