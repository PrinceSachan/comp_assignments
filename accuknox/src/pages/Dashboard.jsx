import React from 'react'
import { Button } from '@/components/ui/button'
import {
  RefreshCw,
  EllipsisVertical,
  ChevronDown,
  Clock,
} from 'lucide-react';
import Cards from '@/components/Cards';
import Addwidget from '@/components/Addwidget';
import Rightsheet from '@/components/Rightsheet';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.data.categories)
  console.log(categories)
  return (
    <>
      <div className='flex justify-between mx-8 my-4'>
        <div className='font-bold'>
          CNAPP Dashboard
        </div>
        <div className='flex judtify-between space-x-4'>
          <Rightsheet />
          <Button
            className='bg-white text-gray-500 h-8 p-2 hover:bg-white focus:outline-none focus:ring-1 focus:ring-black'
          >
            <RefreshCw size={15}  />
          </Button>
          <Button
            className='bg-white text-gray-500 h-8 p-2 hover:bg-white focus:outline-none focus:ring-1 focus:ring-black'
          >
            <EllipsisVertical size={15} />
          </Button>
          <Button
            className='bg-white text-blue-900 h-8 p-2 hover:bg-white focus:outline-none focus:ring-1 focus:ring-black'
          >
            <Clock size={15} className='mr-1'/> Last 2 days <ChevronDown size={15} className='my-1' />
          </Button>
        </div>
      </div>
      {categories.map((category, index) => (
        <div key={index} className='mx-10'>
          <div>
            <div className='font-semibold text-sm py-2'>
              {category.categoryName}
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
              {category.widgets.length > 0 ? (
                category.widgets.map((widget, i) => (
                  <div key={i} className='pb-2'>
                    <Cards categoryName={category.categoryName} title={widget.title} description={widget.description} id={i} />
                  </div>
                ))
              ) : null }
              <Addwidget categoryTitle={category.categoryName} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Dashboard