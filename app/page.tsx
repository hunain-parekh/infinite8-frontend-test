'use client'
import { useState } from "react";
import Button from "./atoms/Button";
import LevelupPopup from "./components/LevelupPopup";
import RewardsPopup from "./components/RewardsPopup";
import MainHeadings from "./atoms/MainHeadings";

export default function Home() {

  const [levelupPopup, setLevelupPopup] = useState(false);
  const [rewardsPopup, setRewardsPopup] = useState(false);

  const toggleLevelupPopup = () => {
    setLevelupPopup((prev) => !prev);
  }

  const toggleRewardPopup = () => {
    setRewardsPopup((prev) => !prev);
  }

  return (
    <main className="bg-black min-h-screen w-full flex flex-col justify-center items-center">

      <MainHeadings h1="Front End Task" h2="Developed By Hunain Parekh!" />

      <div className="flex gap-5 mt-10 sm:flex-col">
        <Button handleClick={toggleLevelupPopup} title="Open Level up Popup" />
        <Button handleClick={toggleRewardPopup} title="Open Reward Popup" />
      </div>

      {levelupPopup && <LevelupPopup onClose={toggleLevelupPopup} />}
      {rewardsPopup && <RewardsPopup onClose={toggleRewardPopup} />}
    </main>
  );
}
