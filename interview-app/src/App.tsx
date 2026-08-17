import { useState } from 'react'
import type { GameImage } from "./images";
import { randomImage, type Character, type StatKey } from "./images";
import { Card } from './Card';
import './App.css'

const NEW_CHARACTER_STATS = { health: 0, attack: 0, defense: 0 };
let nextId = 1;

function addCharacter(image: GameImage) {
  return { id: nextId++, image, ...NEW_CHARACTER_STATS };
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleAddCharacter = () => {
    const character = addCharacter(randomImage());
    setCharacters((prev) => [...prev, character]);
  };

  const handleStatChange = (id: number, stat: StatKey, delta: number) => {
    setCharacters((prev) =>
      prev.map((character) => {
        if (character.id !== id) {
          return character;
        }

        const newValue = character[stat] + delta;

        return { ...character, [stat]: newValue };
      })
    );
  };

  const handleRemove = (idToRemove: number) => {
    setCharacters((prev) => {
      const remainingCharacters = prev.filter(
        (character) => character.id !== idToRemove
      );

      return remainingCharacters;
    });
  };

  const HandleAttackAll = (stat: StatKey) => {
    setCharacters((prev) =>
      prev.map((character) => {

        const newValue = 0;

        return { ...character, [stat]: newValue };
      })
    );
  };

  return (
    <div className="page">
      <div className='container'>
        <div className="actions">
          <button type="button" className="action" onClick={handleAddCharacter}>
            + Add Character
          </button>
          <button type="button" className="action" onClick={() => HandleAttackAll("health")}>
              ☠ Attack All Characters
          </button>
        </div>
      </div>
      <div className='grid'>
        {characters.map((character) => (
          <Card 
            key={character.id}
            character= {character}
            onIncrement={(stat) => handleStatChange(character.id, stat, 1)}
            onDecrement={(stat) => handleStatChange(character.id, stat, -1)}
            onRemove={() => handleRemove(character.id)}
          />
        ))}
      </div>

      
    </div>
  );
}

export default App
