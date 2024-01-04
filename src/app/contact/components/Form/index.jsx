import React, { useState } from 'react'
import { Resend } from 'resend';
import './index.css'
import Rounded from '../../../../common/RoundedButton'
import toast from 'react-hot-toast';
import { NextResponse } from "next/server";


export default function Form() {
    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        email: '',
        // Add other form fields here
      });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
          toast.success('Email Successfully Sent!')
        e.preventDefault()

        const formDataJSON = JSON.stringify(formData);
        console.log(formDataJSON);
        const request = await fetch('api/send', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: formDataJSON,
        })

        const data = await request.json()
        console.log(data);

        return NextResponse.json(data)
        //  if (request.status === 200) {
        //     setFormData({});
        //     console.log(request);
        //     console.log("all good");

        // }
        // return NextResponse.json({ message: "This Worked", success: true });
       
      };
    


  return (
    <div className="wrapper">
    <div className='container'>
        <div className='headerForm'>
            <div className="sentenceone">
            Let's work 
            </div>
            <div className="sentencetwo">
                Together
            </div>
        </div>

        <div className="formWrapper">
            <div className="companyinfo">
                We're open to talk to good people. 
                <br /> 
                just say hello and we'll kick off the chat. 
                <br />
                <br />
                say hi: work@troisiemeoeil.io
            </div>
            <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="identity">
                <input type="text"
                 name="firstname" 
                 id="firstname"
                 value={formData.firstname || ''}
                 onChange={handleInputChange}
                 placeholder='first name' />
                <input type="text"
                name="secondname" 
                id="secondname" 
                value={formData.secondname || ''}
                onChange={handleInputChange}
                placeholder='second name' />
                </div>
             
                <input type="email" 
                name="email" 
                value={formData.email || ''}
                onChange={handleInputChange}
                id="email" 
                placeholder='email' />
                 
                <input className="submit" type="submit"  />
                  
          
            </div>
            </form>
        </div>
    </div>
    </div>

  )
}
