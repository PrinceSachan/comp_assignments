import React from 'react'


const Cards = ({title, description}) => {
  return (
    <div className='bg-white h-40 rounded-lg shadow-sm'>
        <div className='pt-4 pl-4 font-bold'>
            {title}
        </div>
        <div className='pl-4 pt-2 text-sm text-gray-500'>
            {description}
        </div>
    </div>
  )
}

export default Cards