import  React, { useState, useEffect}  from 'react'
import {SearchIcon} from "@heroicons/react/outline"
import Menu from "../assets/menuicon.png"
import Close from "../assets/closeicon.png"




export default function Navbar() {
    let Links =[
        {name:"Home",link:"/"},
        {name:"PokeDex",link:"/"},
        {name:"Regions",link:"/"},
        {name:"Forums",link:"/"},
      ]
    let [open,setOpen]=useState(false)
    
    useEffect(() => {
        console.log(open)
    }, [open])
    return (
      <nav className="bg-white">
        <div className="flex items-center text-black relative justify-around">
            <div className='z-50 p-5 md:w-auto w-full pointer-events-none flex'>
                <a href="/">
                    <h1>PikaPedia</h1>
                </a>
            </div>
            <div onClick = {() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <img className='icon' src={open ? Close : Menu} alt="menuicon"/> 
            </div>
            <ul className={` absolute  ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-black hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
            }
                <li className = "pl-10">
                    <div className="flex items-center  text-gray-400 focus-within:text-gray-600">
                        <SearchIcon className="absolute w-5 h-5 ml-3 pointer-events-none"/>
                        <form action="">
                            <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            autocomplete="off"
                            aria-label="Search"
                            className="pr-3 pl-10 py-2 font-semibold placeholder-gray text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                            />
                        </form>
                    </div>
                </li>
            </ul>
            
        </div>
      </nav>
    );
};


