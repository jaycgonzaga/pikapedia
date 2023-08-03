import  React  from 'react'
import {SearchIcon} from "@heroicons/react/outline"





export default function Navbar() {
  return (
   <div className="navbar bg-yellow-200">
    <div className="flex p-5 items-center justify-between">
        <div className="navbar-brand pl-auto">PokePedia</div>
            <div className="navbar-menu">
                <ul className="flex gap-8">
                    <li>Home</li>
                    <li>Pokedex</li>
                    <li>Regions</li>
                    <li>Forums</li>
                </ul>
            </div>
        <div className="navbar-search">
            <div class="flex items-center text-gray-400 focus-within:text-gray-600">
            <SearchIcon class="absolute w-5 h-5 ml-3 pointer-events-none"/>
            <form action="">
                <input
                type="text"
                name="search"
                placeholder="Search"
                autocomplete="off"
                aria-label="Search"
                class="pr-3 pl-10 py-2 font-semibold placeholder-gray-50 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
            </form>
            </div>
        </div>
    </div>
   </div>
  )
}

