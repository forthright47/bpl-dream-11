import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {

    const handleDelete = () => {
        handleDeleteSelectedPlayer(player);
        toast.success(`${player.playerName} has been removed`);
    }

    return (
        <div className='flex items-center gap-6 justify-between p-6 rounded-2xl border my-3'>
            <div className='flex items-center gap-6'>
                <img src={player.playerImg} alt={player.playerName} className='h-[60px] w-auto rounded-md' />
                <div>
                    <h2 className='flex gap-2 items-center font-semibold text-xl'><FaUser />{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <button className='btn text-red-500' onClick={handleDelete}>
                <MdDeleteForever />
            </button>
        </div>
    );
};

export default SelectedCard;