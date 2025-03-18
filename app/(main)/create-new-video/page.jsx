"use client"
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'
import Voice from './_components/Voice'
import Captions from './_components/Captions'
import { Button } from '@/components/ui/button'
import { WandSparkles } from 'lucide-react'
import Preview from './_components/Preview'

function CreateNewVideo() {
    const [formData, setFormData] = useState()

    const onHandleForm = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
        console.log(formData)
    }
  return (
    <div>
        <h2 className='text-3xl mb-4'>Create New Video</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='col-span-2 p-7 border rounded-xl '>
                <Topic onHandleForm={onHandleForm}/>
                <VideoStyle onHandleForm={onHandleForm}/>
                <Voice onHandleForm={onHandleForm}/>
                <Captions onHandleForm={onHandleForm}/>
                <Button className={'mt-4 w-full'}><WandSparkles></WandSparkles> Create Video</Button>
            </div>
            <div>
                <Preview formData={formData}/>
            </div>
        </div>
    </div>
  )
}

export default CreateNewVideo