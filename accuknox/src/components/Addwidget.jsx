import React from 'react'
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

const Addwidget = ({title}) => {
  return (
    <div>
        <Card className='flex justify-center p-12 py-16'>
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className='h-8'>
                <Plus size={15} className='mr-2' /> Add Widget 
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-white'>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <Label>Title</Label>
              <Input required />
              <Label>Description</Label>
              <Textarea />
              <DialogFooter>
                <DialogClose>
                  <Button type='submit'>Save</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
    </div>
  )
}

export default Addwidget