"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { chatSession } from "@/utils/GeminiAIModel"
import { LoaderCircle } from "lucide-react"
import { MockInterview } from "@/utils/schema"
import { v4 as uuidv4 } from 'uuid';


function AddNewInterview() {
  const [openDailog,setOpenDailog]=useState(false)
  const[jobPosition,setJobPosition]=useState();
  const[jobDesc,setJobDesc]=useState();
  const[jobExperience,setJobExperience]=useState();
  const[loading,setLoading]=useState(false);
  const[jsonResponse,setJsonResponse]=useState([]);
  const onSubmit = async(e)=>{
    setLoading(true)
    e.preventDefault()
console.log(jobExperience,jobDesc,jobPosition)

const InputPrompt="Job Position: "+jobPosition+", Job Description="+jobDesc+", Years of Experiences="+jobExperience+", depends on the Job Position and the years of experience and give us "+process.env.local+" interview questions with answers "
const result=await chatSession.sendMessage(InputPrompt);

const resp=await db.insert(MockInterview)
.values({
  mockId:uuidv4(),
  jsonMockResp:MockJsonResp,
  jobPosition:jobPosition,
  jobDesc:jobDesc,
  jobExperience:jobExperience,
  createdAt:moment().format('DD-MM-yyyy')
  }).returning({mockId:MockInterview.mockId});

  console.log("Inserted ID:" ,resp)

  setLoading(false);
  }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary
      hover:scale-105 hover:shadow-lg cursor-pointer transition-all'
      onClick={()=>setOpenDailog(true)}>
        <h2 className='text-lg text-center'>+Add New</h2>
      </div>
    <Dialog open={openDailog}>

  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Tell us more about your job interviewing</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
       <div>
        <h2>Add Details about your job position/role,Job description and years of experience</h2>
        <div className='mt-7 my-3'>
          <label>Job Role/Job Position</label>
          <Input placeholder='Ex. Fullstack Developer' required
          onChange={(event)=>setJobPosition(event.target.value)}
          />
        </div>
        <div className='mt-7 my-3'>
          <label>Job Description/Tech Stack (In Short)</label>
          <Textarea placeholder='Ex. React, NodeJs, Angular, Mysql etc.' required
          onChange={(event)=>setJobDesc(event.target.value)}
          />
        </div>
        <div className=' my-3'>
          <label>Years of experience</label>
          <Input placeholder='Ex.5' type='number' max='100' required
          onChange={(event)=>setJobExperience(event.target.value)}
          />
        </div>
       </div>
        <div className='flex gap-5 justify-end'>
          <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
          <Button type="submit" disabled={loading} >
            {loading?
            <>
            <LoaderCircle className='animate-spin'/>'Generating for AI'
            </>:'Start Interview'
}
 </Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview