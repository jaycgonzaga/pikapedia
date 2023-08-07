import axios from "axios"

const pokemon = {
    options: {
        url: 'https://pokeapi.co/api/v2/'
    },
    getAllPokemon: async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1281`)
        return response.data.results
    },
    getPokeDetails: async (input) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        return res.data
    }
}

export default pokemon