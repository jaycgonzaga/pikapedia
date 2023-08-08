import {React, useEffect, useState} from 'react'
import Pokemon from '../lib/pokemon'
import PokeCard from '../components/pokecard'


export default function Pokedex() {

  const [pokemonData,setPokemonData] = useState([])
  const [pokeDetails,setPokeDetails] = useState([])
  const [showPokemon,setShowPokemon] = useState([])
  const [pagStart, setPagStart] = useState(200)
  const [pagEnd, setPagEnd] = useState(249)
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {async function promise(){const table = await Pokemon.getAllPokemon() 
    setPokemonData(table)}promise()},[])
  useEffect(() => {if(pokemonData.length>0){renderPokedex()}else{return}},[pokemonData])

  function renderPokedex(){let pokeContainer = []
    for (let i = pagStart; i <= pagEnd; i++) {pokeContainer.push(<PokeCard name={pokemonData[i].name.charAt(0).toUpperCase()+pokemonData[i].name.slice(1)}id={i+1}/>)}setPokedex(pokeContainer)}

  return(
    <section id='Pokedex'>
      <div className='pokeContainer justify-items-center p-5 inline-grid 2xl:grid-cols-10 lg:grid-cols-5 sm:grid-cols-3 gap-5'>
         {pokedex.length > 0 && pokedex.map((x) => (x))}
      </div>
    </section>
  )
}
