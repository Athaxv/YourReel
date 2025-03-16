"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea';
import { SparklesIcon } from 'lucide-react';
import React, { useState } from 'react'

const suggestions = [
    "Adventure",
    "Mystery",
    "Fantasy",
    "Science Fiction",
    "Horror",
    "Romance",
    "Historical Fiction",
    "Dystopian",
    "Crime",
    "Mythology"
];

function Topic({onHandleForm}) {
    const [selected, setSelected] = useState()
  return (
    <div>
        <h2 className='mb-1'>Project Title</h2>
        <Input placeholder="Enter project title" onChange={(e) => onHandleForm('Title', e.target.value)} className={"mt-2"}/>
    <div className='mt-5'>
        <h2>Video Topic</h2>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
  <TabsList>
    <TabsTrigger value="suggestion">Suggestion</TabsTrigger>
    <TabsTrigger value="your-topic">Your Topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestion">
    <div>
    {suggestions.map((sugg, index) => (
      <Button variant={'outline'} onClick={() => {setSelected(sugg)
        onHandleForm('Topic', sugg)
      }} className={`m-1 ${sugg==selected ? 'bg-secondary' : ''}`} key={index}>{sugg}</Button>
    ))}
    </div>
  </TabsContent>
  <TabsContent value="your-topic">
    <div className='mt-2'>
        <h2>Enter your Topic</h2>
        <Textarea className="mt-2" placeholder="Enter your unique topic" onChange={(e) => {onHandleForm('Topic', e.target.value)}}/>
    </div>
  </TabsContent>
</Tabs>

        </div>
    <Button className="mt-4"><SparklesIcon></SparklesIcon>Generate Script</Button>
    </div>
  )
}

export default Topic