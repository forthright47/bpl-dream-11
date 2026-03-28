import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const AvailablePlayers = ({ players }) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 mt-8'>
                {
                    players.map(player => {
                        return <div className="card bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    src={player.playerImg} />
                            </figure>
                            <div className="card-body">
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
                                    <button className="btn">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;