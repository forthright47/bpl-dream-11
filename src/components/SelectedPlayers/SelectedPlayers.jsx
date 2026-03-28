import React from 'react';
import SelectedCard from '../ui/Card/SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            {selectedPlayers.length === 0 ?
            <div className='h-[250px] flex items-center justify-center flex-col gap-4'>
                <h2 className='font-semibold text-xl'>No players selected yet</h2>
                <p className='text-sm text-black/50'>Go to Available tab to select players</p>
            </div>
            : selectedPlayers.map((player, i)=>{
                return (
                    <SelectedCard key={i} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}/>
                )
            })}
        </div>
    );
};

export default SelectedPlayers;