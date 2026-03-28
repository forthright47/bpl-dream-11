import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

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
            <div className='h-[250px] flex items-center justify-center flex-col gap-4 border border-gray-200 rounded-xl'>
                <h2 className='font-semibold text-xl'>No players selected yet</h2>
                <p>Go to Available tab to select players</p>
            </div>
            : selectedPlayers.map((player, i)=>{
                return <div key={i} className='flex items-center gap-6 justify-between p-6 rounded-2xl border my-3'>
                    <div className='flex items-center gap-6'>
                        <img src={player.playerImg} alt={player.playerName} className='h-[60px] w-auto rounded-md' />
                        <div>
                            <h2 className='flex gap-2 items-center font-semibold text-xl'><FaUser />{player.playerName}</h2>
                            <p>{player.playerType}</p>
                        </div>
                    </div>
                    <button className='btn text-red-500' onClick={()=> handleDeleteSelectedPlayer(player)}>
                        <MdDeleteForever />
                    </button>
                </div>
            })}
        </div>
    );
};

export default SelectedPlayers;