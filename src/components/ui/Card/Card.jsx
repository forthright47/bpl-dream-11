import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        let newCoin = coin - player.price;
        if(newCoin >= 0){
            setCoin(coin - player.price);
        }else{
            alert("Not enough coin to purchase this player");
            return;
        }

        alert(`${player.playerName} is selected`);
        setIsSelected(true);
        setCoin(coin - player.price);

        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="h-70 overflow-hidden p-3">
                <img className="w-full h-full object-cover rounded-xl"
                    src={player.playerImg} />
            </figure>
            <div className="card-body -m-3">
                <h2 className="card-title"><FaUser /> {player.playerName}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <FaFlag className='text-black/50' />
                        <p className='text-black/50'>{player.playerCountry}</p>
                    </div>
                    <button className='btn'>{player.playerType}</button>
                </div>

                <div className="divider -mt-1.5 -mb-1"></div>

                <p className='font-bold'>Rating: {player.rating}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>{player.battingStyle}</p>
                    <p className='font-bold text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className='font-bold'>Price: ${player.price}</p>
                    <button className="btn"
                    onClick={handleChoosePlayer}
                    disabled={isSelected ? true : false}
                    >{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;