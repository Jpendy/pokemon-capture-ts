import data, { Pokemon } from '../data/pokemonData'

export const findByName = (name: string, pokemonArr: Array<Pokemon>): Pokemon | undefined => pokemonArr.find((pokemon: Pokemon) => pokemon.name === name)

export const pickThreeRandom = (): Array<Pokemon> => {
    let random1: number = Math.floor(Math.random() * (data.length - 1))
    let random2: number = Math.floor(Math.random() * (data.length - 1))
    let random3: number = Math.floor(Math.random() * (data.length - 1))

    while (random1 === random2 || random1 === random3 || random2 === random3) {
        random2 = Math.floor(Math.random() * (data.length - 1))
        random3 = Math.floor(Math.random() * (data.length - 1))
    }

    return [
        data[random1],
        data[random2],
        data[random3]
    ]
}