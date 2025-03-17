"use client"
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react'

const VoiceOptions = [
    {
        "value": 'as_sarah',
        "name": "AU Sarah (Female)"
    },
    {
        "value": 'af_sky',
        "name": "AU sky (Female)"
    },
    {
        "value": 'am_adam',
        "name": "AU Adam (Male)"
    },
    {
        "value": 'hf_alpha',
        "name": "IN Alpha (Male)"
    },
    {
        "value": 'hf_beta',
        "name": "IN Beta (Female)"
    },
    {
        "value": 'hm_omega',
        "name": "IN Omega (Male)"
    },
    {
        "value": 'hm_psi',
        "name": "IN Psi (Male)"
    },
    {
        "value": 'am_echo',
        "name": "AM Echo (Male)"
    },
    {
        "value": 'am_eric',
        "name": "AM Eric (Male)"
    },
    {
        "value": 'am_fenrir',
        "name": "AM Fenrir (Male)"
    },
    {
        "value": 'am_liam',
        "name": "AM Liam (Male)"
    },
    {
        "value": 'am_michael',
        "name": "AM Michael (Male)"
    },
    {
        "value": 'am_onyx',
        "name": "AM Onyx (Male)"
    },
]
function Voice({onHandleForm}) {
    const [selectedVoice, setSelectedVoice] = useState();
  return (
    <div>
        <h2 className='mt-3'>Video Voice</h2>
        <p className='text-sm text-gray-400 mb-3'>Select voice for your video</p>
        <ScrollArea className="h-[120px] w-full">
        <div className='grid grid-cols-2 gap-3'>
            {VoiceOptions.map((voice, index) => (
                // <div key={index}>
                <Button variant={'outline'} onClick={() => {setSelectedVoice(voice.name)
                    onHandleForm('Voice', voice.name)
                }} key={index} className={`cursor-pointer p-3 ${selectedVoice==voice.name ? 'border border-gray-200' : ''}`}>{voice.name}</Button>
                // </div>
            ))}
        </div>
        </ScrollArea>
    </div>
  )
}

export default Voice