import React from 'react'

export default function Poketype(type) {
  return (
    <div className='poketype flex justify-center mt-2'>
        {type.type0 && <div className='typebox-grass mr-1 px-3'>{type.type0.charAt(0).toUpperCase() + type.type0.slice(1)}</div>}
        {type.type1 && <div className='typebox-grass ml-1 px-3'>{type.type1.charAt(0).toUpperCase() + type.type1.slice(1)}</div>}
    </div>
  )
}
