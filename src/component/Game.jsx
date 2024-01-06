
import React, { useState } from 'react';
import Gameobj from './Gamedata';
import bell from "../assets/bell.wav";
import "./Game.css";

function Game() {
  const [selectedId, setSelectedId] = useState(null);
  const [empty, setEmptyDiv] = useState(null);

  const playSound = () => {
    const audio = new Audio(bell);
    audio.play();
  };

  console.log(selectedId);

  return (
    <div className='maincontainer'>
      <div className='childbox1'>
        {selectedId == null ? (
          <div className='start'>Click the button and see the magic</div>
        ) : (
          <div className='gif'>
            <video key={selectedId} autoPlay muted>
     
              <source src={ Gameobj.find((data) => data.id === selectedId).gif } />
            </video>
          </div>
        )}
      </div>
      <div className='buttongrid'>
        {Gameobj.map((data) => (
          <div key={data.id} className='chilld'>
            <button
              className='number'
              onClick={() => {
                setSelectedId(data.id);
                setEmptyDiv(!null); 
                playSound();
              }}
            >
              {data.number}
            </button>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Game;
