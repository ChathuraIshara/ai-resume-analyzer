import React, { type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import { useState } from 'react';
import FileUploader from '~/components/FileUploader';

const upload = () => {
   const [isProcessing,setIsProcessing] = useState(false);
   const [statusText,setStatusText] = useState('');
   const [file,setFile] = useState<File | null>(null);
 
   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   }

   const handleFileSelect = (file:File | null) =>{
    setFile(file);
   }

  return (
   <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className='page-heading'>
            <h1>Smart feedback for your dream job</h1>
            {isProcessing ?(
                <>
                <p>{statusText}</p>
                <img src='/images/resume-scan.gif' className='w-full'/>
                </>
            ):(
               <>
               <h2>Drop your resume for an ATS score and improvement tips</h2>
               </>
            )}
            {!isProcessing && (
                <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'> 
                 <div className='form-div'>
                    <label htmlFor='company-name'>Company Name</label>
                    <input type='text' id='company-name' name='company-name' placeholder='Company Name' required />
                 </div>
                <div className='form-div'>
                    <label htmlFor='job-title'>Job Title</label>
                    <input type='text' id='job-title' name='job-title' placeholder='Job Title' required />
                 </div>
                  <div className='form-div'>
                    <label htmlFor='job-description'>Job Description</label>
                    <textarea rows={5}  id='job-description' name='job-description' placeholder='Job Description' required />
                 </div>
                   <div className='form-div'>
                    <label htmlFor='job-description'>Upload Resume</label>
                    <FileUploader onFileSelect={handleFileSelect}/>
                 </div>
                 <button className='primary-button' type='submit'>Analyze Resume</button>

                </form>
            )}
        </div>
        </section>
    </main>     
  )
}

export default upload