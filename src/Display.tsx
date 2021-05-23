import React from 'react'
import { Pokemon } from './data/pokemonData';
import './styles/Display.css'

interface Props {
    randomPokemon: Array<Pokemon>,
    selectedPokemon: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Display: React.FC<Props> = ({ randomPokemon, selectedPokemon, handleChange, handleClick }) => {

    const inputs = randomPokemon.map(({ name, image }: Pokemon) => (
        <label key={name} htmlFor={name}>
            <input
                id={name}
                name="pokemon"
                type="radio"
                value={name}
                checked={selectedPokemon === name}
                onChange={handleChange}
            />
            <img src={image} alt="" style={{ width: "100px" }} />
        </label>
    ))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <div>
                {inputs}
            </div>
            <div style={{ textAlign: 'center' }}>

                <button onClick={handleClick} >Capture!</button>
            </div>
        </div>
    )
}

export default Display;
