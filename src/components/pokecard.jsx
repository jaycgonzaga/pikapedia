import React from 'react'
import Sprite from '../assets/sprite.png'
import Poketype from './poketype'

export default function pokecard() {
  return (
    <>
      <div className="h-56 w-48 mx-center pokecard-grass text-center text-white py-5">
        <h1 className='text-lg' >01</h1>
        <img className='pokesprite mx-auto' src={Sprite} alt="sprite"/>
        <h1 className='text-xl'>Bulbasaur</h1>
        <Poketype />
      </div>

      <div className="h-56 w-48 mx-center pokecard-water text-center text-white py-5">
        <h1 className='text-lg' >04</h1>
        <img className='pokesprite mx-auto' src={Sprite} alt="sprite"/>
        <h1 className='text-xl'>Squirtle</h1>
        <Poketype />
      </div>

      <div className="h-56 w-48 mx-center pokecard-fire text-center text-white py-5">
        <h1 className='text-lg' >07</h1>
        <img className='pokesprite mx-auto' src={Sprite} alt="sprite"/>
        <h1 className='text-xl'>Charmander</h1>
        <Poketype />
      </div>
    </>
  )
}
