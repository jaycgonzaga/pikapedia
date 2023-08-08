import {React, useEffect, useState} from 'react'
import Sprite from '../assets/sprite.png'
import Poketype from './poketype'
import Pokemon from '../lib/pokemon'

export default function Pokecard(pokemon) {

  const [type0,setType0] = useState(null)
  const [type1,setType1] = useState(null)
  const [pokeImage,setPokeImage] = useState(null)

  const colorTypes = {
    grass: 'pokecard-grass',
    water: 'pokecard-water',
    fire: 'pokecard-fire',
    electric: 'pokecard-electric'
  }

  const pokeDetails = async function promisedDetails(){const details = await Pokemon.getPokeDetails(pokemon.id)
    setPokeImage(details.sprites.other['official-artwork'].front_default)
    if (details.types[0]) {setType0(details.types[0].type.name)}
    if (details.types[1]) {setType1(details.types[1].type.name)}}
  pokeDetails()

  return (
    <>
      <div className={`h-56 w-48 mx-center ${colorTypes[type0]} text-center text-white py-5`}>
        <h1 className='text-lg' >{pokemon.id < 10 ? `0${pokemon.id}`: pokemon.id}</h1>
        <img className='pokesprite mx-auto' src={pokeImage} alt="sprite"/>
        <h1 className='text-xl'>{pokemon.name}</h1>
        <Poketype type0={type0} type1={type1} />
      </div>
    </>
  )
}
