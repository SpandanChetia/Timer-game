import React, { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [enteredPlayerName, changePlayerName] = useState(null);

  function handleClick() {
    changePlayerName(playerNameRef.current.value);
    playerNameRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}!</h2>
      <p>
        <input 
          ref={playerNameRef} 
          type="text" 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
