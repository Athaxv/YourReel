"use client"
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'

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
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2 p-7 border rounded-xl'>
                <Topic onHandleForm={onHandleForm}/>
                <VideoStyle/>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default CreateNewVideo