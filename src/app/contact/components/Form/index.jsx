import React from 'react'
import './index.css'
import Rounded from '../../../../common/RoundedButton'

export default function Form() {
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
                <input type="text" name="first name" id="firstname" placeholder='first name' />
                <input type="text" name="second name" id="secondname" placeholder='second name' />
                </div>
             
                <input type="email" name="email" id="email" placeholder='email' />
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
