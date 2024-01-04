import React, { useState } from 'react'
import { Resend } from 'resend';
import './index.css'
import Rounded from '../../../../common/RoundedButton'

// const resend = new Resend('re_Rygjzscp_Ay5zxvHgtyjs1J6WmuSrepFx');

// resend.emails.send({
//     from: 'troisiemeoeilagency@gmail.com',
//     to: email,
//     subject: 'Hello World',
//     html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//   });

export default function Form() {
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [email, setEmail] = useState("");

console.log(firstname);

  return (
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
            <div className="form">
                <div className="identity">
                <input type="text" name="first name" id="firstname" onChange={(e) => setFirstname(e.target.value)} placeholder='first name' />
                <input type="text" name="second name" id="secondname" onChange={(e) => setSecondname(e.target.value)}  placeholder='second name' />
                </div>
             
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}  id="email" placeholder='email' />
                <div className="button">
                    <Rounded >
                        <p>Start Here!</p>
                    </Rounded>
            </div>
            </div>
         
        </div>
    </div>
  )
}
