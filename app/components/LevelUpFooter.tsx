import React from 'react'

const LevelUpFooter = () => {
    return (
        <div className='footer-text mt-10 flex flex-col items-center justify-center'>
            <p className='text-[24px] sm:w-[90%] sm:text-[20px] text-brown-500 font-bold text-center'>You’ve leveled up and earned a new badge! </p>
            <p className='text-[18px] sm:w-[90%] sm:text-[16px] font-normal text-light-brown-100 text-center'>Claim your <span className='text-yellow-200'>NFT badge</span> now, or retrieve it later from your Inventory.</p>
            <p className='mt-8 w-[70%] sm:w-[90%] text-center text-light-brown-100 text-[15px]'>To claim your new badge, you'll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one.
                If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
        </div>
    )
}

export default LevelUpFooter
