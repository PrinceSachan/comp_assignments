import React from 'react'
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '@/features/widgetSlice';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card className='bg-white h-40 rounded-lg shadow-sm'>
      <CardHeader>
        <CardTitle className='pt-4 text-md pt-0 flex justify-between'>
          <div className='font-bold text-gray-700'>
            {title}
          </div>
          <button className='pr-3' onClick={removeWidgetHandler}>
            <X size={15} strokeWidth={3} />
          </button>
        </CardTitle>
        <CardDescription>
          {
            description.length > 100 ? 
            `${description.substring(0, 120)}...` : `${description}`
          }
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default Cards