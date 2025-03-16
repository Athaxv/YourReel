"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea';
import  axios  from 'axios';
import { Loader2Icon, SparklesIcon } from 'lucide-react';
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
    const [script, setScript] = useState();
    const [loading, setLoading] = useState(false);
    const [selectedScript, setSelectedScript] = useState();

    const GenerateScript = async () => {
      setSelectedScript(null);
        setLoading(true);
        try {
            console.log("Axios:", axios);

            const result = await axios.post('/api/generate-script', {
                topic: selected
            })
            console.log(result?.data);
            setScript(result.data?.scripts);
        } catch (error) {
            console.log(error?.message)
        }
        setLoading(false);
    }
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
{/* {console.log(script)} */}


    {script?.length > 0 && 
    <div className='mt-3'>
    <h2>Select Your Script</h2>
        <div className='grid grid-cols-2 gap-5'>
            {script?.map((item, index) => (
                <div className={`p-3 border rounded-lg mt-3 ${selectedScript==index ? 'bg-secondary' : ''}`} onClick={() => setSelectedScript(index)} key={index}>
                    <h2 className='line-clamp-4 text-sm text-gray-300'>{item.content}</h2>
                </div>
            ))}
        </div>
        </div>
    }


        </div>
    <Button className="mt-4" disabled={loading} onClick={GenerateScript}>{loading ? <Loader2Icon className='animate-spin'/> : <SparklesIcon></SparklesIcon>}Generate Script</Button>
    </div>
  )
}

export default Topic