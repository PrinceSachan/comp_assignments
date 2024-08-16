import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"  
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useDispatch, useSelector } from 'react-redux';
  
const Rightsheet = () => {
  const categories = useSelector((state) => state.widgets.data.categories)
  const dispatch = useDispatch()

  const removeWidgetHandler = () => {

  }

  return (
    <div>
        <Sheet className='bg-white'>
            <SheetTrigger asChild>
                <Button variant="outline" className='bg-white h-8'>
                    Add Widget <Plus size={15} className='ml-1' />
                </Button>
            </SheetTrigger>
            <SheetContent className='bg-white border-none flex flex-col h-full' style={{ maxWidth: '40vw' }}>
                <SheetHeader className='bg-slate-800 text-slate-100 h-8'>
                    <SheetTitle className='text-slate-100 font-semibold text-sm mt-1.5 ml-4'>Add Widget</SheetTitle>
                    <SheetDescription className='ml-4 mt-4'>
                        Personalise your dashbaord by adding the following widget.
                    </SheetDescription>
                </SheetHeader>
                <Tabs className='mt-8' defaultValue='CSPM'>
                    <TabsList className="mb-4 bg-white rounded-none ml-4 inline-flex">
                        {categories.map((category, index) => {
                            const tabValue = category.categoryName.split(' ')[0];
                            return (
                                <TabsTrigger 
                                    key={index}
                                    value={tabValue} 
                                    className="pb-2 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
                                >
                                    {tabValue}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <Separator />
                    {categories.map((category, index) => {
                        const tabValue = category.categoryName.split(' ')[0];
                        return (
                            <TabsContent key={index} value={tabValue}>
                                {category.widgets.length > 0 ? (
                                category.widgets.map((widget, i) => (
                                    <div key={i} className="flex items-center my-2 mx-4 p-2 rounded border border-solid border-slate-800">
                                        <Checkbox checked={widget.done} />
                                        <Label className="ml-2">{widget.title}</Label>
                                    </div>
                                ))
                                ) : (
                                    <p className='ml-4'>No widgets available</p>
                                )}
                            </TabsContent>
                        );
                    })}
                </Tabs>
                {/* <SheetFooter className='mt-auto mr-4 mb-2'>
                    <SheetClose className='space-x-2'>
                        <Button variant="outlined" className='border border-solid border-slate-900 h-8'>Cancel</Button>
                        <Button className='h-8'>Confirm</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Rightsheet