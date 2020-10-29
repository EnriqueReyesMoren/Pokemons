import axios from "axios"
const baseURL = "https://pokeapi.co/api/v2/pokemon/?offset=60&limit=25"

const pokeService = axios.create({
    baseURL
})

export const getPokemons = async() => {
    const {
        data: pokemon
    } = await pokeService.get("/")
    return pokemon
}

export const getPokemon = async beerId => {
    const {
        data
    } = await pokeService.get(`/${beerId}`)
    return data
}

export const randomPokemon = async() => {
    const {
        data
    } = await pokeService.get('/random')
    return data
}

export const newPokemon = async(value) => {
    await pokeService.post('/new', value)
    return {
        message: "New pokemon successfully saved to your favorite list!"
    }
}

export const searchPokemon = async(search) => {
    const {
        data
    } = await pokeService.get(`/search?q=${search}`)
    return data
}