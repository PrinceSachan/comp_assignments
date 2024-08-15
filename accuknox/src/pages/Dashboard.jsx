import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  Plus,
  RefreshCw,
  EllipsisVertical,
  ChevronDown,
  Clock,

} from 'lucide-react';
import dashboardConfig from '../data/dashboardConfig.json';
import Cards from '@/components/Cards';
import Addwidget from '@/components/Addwidget';

const Dashboard = () => {
  return (
    <>
      <div className='flex justify-between mx-8 my-4'>
        <div className='font-bold'>
          CNAPP Dashboard
        </div>
        <div className='flex judtify-between space-x-4'>
          <Button
            className='bg-white text-gray-500 h-8 p-2 hover:bg-white focus:outline-none focus:ring-1 focus:ring-black'
          >
            Add Widget <Plus size={15} className='ml-1' />
          </Button>
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
      {dashboardConfig.categories.map((category, index) => (
        <div key={index} className='mx-10'>
          <div>
            <div className='font-semibold text-sm pb-2'>
              {category.categoryName}
            </div>
            <div className='grid grid-cols-3 gap-3'>
              {category.widgets.length > 0 ? (
                category.widgets.map((widget, i) => (
                  <div key={i} className='pb-2'>
                    <Cards title={widget.title} description={widget.description} />
                  </div>
                ))
              ) : null }
              <Addwidget title={category.categoryName} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Dashboard