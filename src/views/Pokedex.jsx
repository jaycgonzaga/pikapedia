import {React, useEffect, useState} from 'react'
import Pokemon from '../lib/pokemon'
import PokeCard from '../components/pokecard'
import axios from 'axios'

export default function Pokedex() {

  const [pokemonData,setPokemonData] = useState([])
  const [pokeDetails,setPokeDetails] = useState([])
  const [showPokemon,setShowPokemon] = useState([])
  const [pagStart, setPagStart] = useState(0)
  const [pagEnd, setPagEnd] = useState(19)
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {async function promise(){const table = await Pokemon.getAllPokemon() 
    setPokemonData(table)}promise()},[])
  useEffect(() => {if(pokemonData.length>0){renderPokedex()}else{return}},[pokemonData])

  function renderPokedex(){let pokeContainer = []
    for (let i = pagStart; i <= pagEnd; i++) {pokeContainer.push(<PokeCard name={pokemonData[i].name.charAt(0).toUpperCase()+pokemonData[i].name.slice(1)}id={i+1}/>)}setPokedex(pokeContainer)}

  return(
    <section id='Pokedex'>
      <div className='pokeContainer grid grid-cols-5'>
         {pokedex.length > 0 && pokedex.map((x) => (x))}
      </div>
    </section>
  )
}
