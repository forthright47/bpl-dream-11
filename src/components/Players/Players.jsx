import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);

    const [selectedType, setSelectedType] = useState("Available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto px-4 my-10'>
            {/* Header & Toggle */}
            <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 items-start sm:items-center mb-5'>
                {selectedType === "Available"
                    ? <h2 className='font-bold text-xl lg:text-3xl'>Available Players</h2>
                    : <h2 className='font-bold text-xl lg:text-2xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>
                }
                <div className='flex flex-col sm:flex-row space-y-3 sm:self-auto'>
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
            </div>

            {/* Players Section */}
            {selectedType === "Available"
                ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} />
            }
        </div>
    );
};

export default Players;