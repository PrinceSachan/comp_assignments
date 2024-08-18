import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'
  
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const categories = useSelector((state) => state.widgets.data.categories)

    const filteredWidgets = categories
        .map(category => 
            category.widgets.filter(widget => 
                widget.title.toLowerCase().includes(searchQuery.toLowerCase()) 
            )
        )
        .flat();

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
        {/* Display filtered widgets */}
        {searchQuery && (
                <div className="mt-4 px-6">
                    {filteredWidgets.length > 0 ? (
                        filteredWidgets.map((widget, index) => (
                            <div key={index} className="p-4 border rounded mb-2">
                                <h3 className="font-bold">{widget.title}</h3>
                                <p>{widget.text}</p>
                            </div>
                        ))
                    ) : (
                        <p>No widgets found.</p>
                    )}
                </div>
            )}
        
    </div>
  )
}

export default Navbar