import React from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '@/features/widgetSlice';

const Cards = ({title, description, id, categoryName}) => {
  const dispatch = useDispatch()

  const removeWidgetHandler = () => {
    const widgetIndex = id
    dispatch(removeWidget({
      categoryName: categoryName,
      widgetIndex
    }))
  }
  return (
    <div className='bg-white h-40 rounded-lg shadow-sm'>
        <div className='pt-4 pl-4 font-bold flex justify-between'>
          {title}
          <button className='pr-3' onClick={removeWidgetHandler}>
            <X size={15} strokeWidth={3} />
          </button>
        </div>
        <div className='pl-4 pt-2 text-sm text-gray-500'>
          {description}
        </div>
    </div>
  )
}

export default Cards