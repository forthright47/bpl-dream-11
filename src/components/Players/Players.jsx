import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise}) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(players);

    const [selectedType, setSelectedType] = useState("Available");

    return (
        <div className='container mx-auto my-8'>
            <div className='flex justify-between gap-4 items-center mb-5'>
                {selectedType === "Available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Players (0/11)</h2>}
                <div>
                    <button
                    onClick={()=>setSelectedType("Available")}
                    className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                    onClick={()=>setSelectedType("Selected")}
                    className={`btn ${selectedType === "Selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                </div>
            </div>

            {selectedType === "Available" ? <AvailablePlayers players={players}/>
                : <SelectedPlayers />
            }
        </div>
    );
};

export default Players;