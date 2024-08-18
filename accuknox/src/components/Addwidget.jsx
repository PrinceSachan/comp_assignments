import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { useDispatch } from 'react-redux';
import { addWidget } from '@/features/widgetSlice'
import { DialogDescription } from '@radix-ui/react-dialog'

const Addwidget = ({categoryTitle}) => {
  const [title, setTitle] = useState('')
  const [description, SetDescription] = useState('')
  const [check, setCheck] = useState(true)
  const dispatch = useDispatch()
  
  const addWidgetHanlder = () => {
    const newWidget = {
      title: title,
      description: description,
      done: check
    }
    if(title === '' && description===""){
      throw new Error('Titel and Description should be filled')
    } else {
      dispatch(addWidget({
        categoryName: categoryTitle,
        newWidget
      }))
      setTitle('')
      SetDescription('')
    }
  }

  return (
    <div>
        <div className='bg-white h-40 rounded-lg shadow-sm flex flex-col justify-center'>
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className='h-8'>
                <Plus size={15} className='mr-2' /> Add Widget 
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-white'>
              <DialogHeader>
                <DialogTitle>{categoryTitle}</DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
              <Label>Description</Label>
              <Textarea value={description} onChange={(e) => SetDescription(e.target.value)} required/>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={addWidgetHanlder}>Save</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
    </div>
  )
}

export default Addwidget