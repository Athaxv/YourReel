"use client"
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'
import Voice from './_components/Voice'
import Captions from './_components/Captions'
import { Button } from '@/components/ui/button'
import { Loader2Icon, WandSparkles } from 'lucide-react'
import Preview from './_components/Preview'
import axios from 'axios'
import { useMutation } from 'convex/react'

function CreateNewVideo() {
    const [formData, setFormData] = useState()
    const [loading, setLoading] = useState(false);
    const createInitialVideoRecord = useMutation(api.videoData.createVideoData)
    const onHandleForm = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
        console.log(formData)
    }

    const GenerateVideo = async () => {
        if (!formData.ImageStyle || !formData.captions || !formData.Topic || !formData.Voice || !formData.script || !formData.Title){
            console.log("error", "All fields are required")
            return;
        }
        setLoading(true);
        const resp = await createInitialVideoRecord({
            title: formData.Title,
            topic: formData.Topic,
            script: formData.script,
            VideoStyle: formData.ImageStyle,
            caption: formData.caption,
            voice: formData.Voice,
            uid: user?._id,
            createdBy: user?.email
        })
        console.log(resp)
        const result = await axios.post('/api/generate-video-data', {
            ...formData,
            recordId: resp
        })

        console.log(result)
        setLoading(false)
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
                <Button disabled={loading} className={'mt-4 w-full'} onClick={GenerateVideo}>{loading ? <Loader2Icon className='animate-spin'/> : <WandSparkles></WandSparkles> } Create Video</Button>
            </div>
            <div>
                <Preview formData={formData}/>
            </div>
        </div>
    </div>
  )
}

export default CreateNewVideo