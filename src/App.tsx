import React, { useState } from 'react';
import './App.css';
import { Pokemon } from './data/pokemonData';
import Display from './Display';
import { pickThreeRandom } from './utils/utils';

interface resultObj {
  name: string,
  encountered: number,
  captured: number
}

interface Results {
  [key: string]: resultObj
}

function App() {

  const [randomPokemon, setRandomPokemon] = useState<Array<Pokemon>>(pickThreeRandom())
  const [selectedPokemon, setSelectedPokemon] = useState<string>(randomPokemon[0].name)
  const [results, setResults] = useState<Results>({})
  const [counter, setCounter] = useState<number>(0)
  const [displayResults, setDisplayResults] = useState<boolean>(false)

  const handlePokemonChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedPokemon(e.target.value)

  const handleCapturePokemon = (e: React.MouseEvent<HTMLButtonElement>): void => {


    setResults(prevResults => {
      const newResults = { ...prevResults }

      randomPokemon.forEach(({ name }) => {
        if (!newResults[name]) newResults[name] = {
          name: name,
          encountered: 1,
          captured: 0
        }
        else newResults[name].encountered++
        if (name === selectedPokemon) newResults[name].captured++;
      })

      return newResults;
    })

    setCounter((counter => counter + 1))

    if (counter === 5) setDisplayResults(true)

    const newPokemon = pickThreeRandom()
    setRandomPokemon(newPokemon)
    setSelectedPokemon(newPokemon[0].name)
  }

  if (displayResults) return (
    <ul>
      {
        Object.values(results).map(({ name, encountered, captured }: resultObj) => (
          <li key={name}>
            <h3>{name}</h3>
            <p>Encountered {encountered} times</p>
            <p>Captured {captured} times!</p>
          </li>
        ))
      }
    </ul>
  )
  return (
    <div >

      <Display
        randomPokemon={randomPokemon}
        handleChange={handlePokemonChange}
        handleClick={handleCapturePokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
}

export default App;
