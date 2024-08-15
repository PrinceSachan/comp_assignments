import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { 
    Search, 
    ChevronDown,
    BellIcon,
    User
} from 'lucide-react'
  
const Navbar = () => {
  return (
    <div className='bg-white py-3'>
        <div className='flex justify-between px-6'>
            <div className='my-auto'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='font-semibold'>Dashboard V2</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='w-4/12 relative'>
                <Input 
                    className='h-8 pl-8'
                    placeholder='Search Anything...'
                />
                <Search size={15} className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500'/>
            </div>
            <div className='pl-10 w-1/6 flex justify-between my-auto'>
                <div>
                    <ChevronDown size={20} className='text-gray-500'/>
                </div>
                <div>
                    <BellIcon size={20} className='text-sky-400'/>
                </div>
                <div>
                    <User size={20} className='text-sky-400'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar