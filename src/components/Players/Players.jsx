import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(players);

    const [selectedType, setSelectedType] = useState("Available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto my-8'>
            <div className='flex flex-col sm:flex-row self-end sm:self-auto'>
                <button
                    onClick={() => setSelectedType("Available")}
                    className={`btn text-sm px-3 sm:text-base sm:px-4 ${selectedType === "Available" ? "bg-[#E7FE29]" : ""} rounded-xl sm:rounded-r-none sm:rounded-l-xl`}>
                    Available
                </button>
                <button
                    onClick={() => setSelectedType("Selected")}
                    className={`btn text-sm px-3 sm:text-base sm:px-4 ${selectedType === "Selected" ? "bg-[#E7FE29]" : ""} rounded-xl sm:rounded-l-none sm:rounded-r-xl`}>
                    Selected ({selectedPlayers.length})
                </button>
            </div>

            {selectedType === "Available" ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} />
            }
        </div>
    );
};

export default Players;