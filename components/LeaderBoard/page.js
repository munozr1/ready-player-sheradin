'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LeaderBoard({players}) {
  
  
  const starActor = {
    name: "Tye Sheridan",
    score: 9.9
  };

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  

  return (
    <div className="relative bg-black p-4 text-white border-4 border-black font-pixel h-52 w-52">
      <div className="absolute top-0  border-4 h-48 w-48  border-purple-600 opacity-50"></div>
      <div className="absolute bottom-0  left-2 h-48 w-48 border-4 border-blue-600 opacity-50"></div>
      <div className="absolute  top-2 right-0 bottom-[5px]  left-4 border-4 border-black bg-black opacity-70"></div>

      <div className="relative z-10">
        <ol className="list-none space-y-2" id="leaderboard">
          {sortedPlayers.map((player, index) => (
            <li key={index} className={`flex justify-between ${player.name == starActor.name ? "scale-125 border-b-2 ml-3 border-orange-400": null}`}>
              <span className="text-sm micro-5">{index+1}. {player.name}</span>
              <span>{player.score}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>

  );
}
