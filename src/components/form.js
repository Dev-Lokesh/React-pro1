import React from 'react';
import bgImg from '../assets/img1.jpg';
import { FaApple } from "@react-icons/all-files/fa/FaApple";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";



export default function form() {
  return (
    <section>
        <div className='register'>
        <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
            <div className='col-2'>
                <div className='wrap'> 
                   <h2>Sign in</h2>
                   <span>Completely employee-owned, we're driven with a passion</span>
                </div>
            <div className='buttons'>
               <button className='btn1'><FcGoogle/>  Continue with Google</button>
                <button className='btn2'><FaApple/>  Continue with Google</button>  
                <p>Or</p>
            </div>
            <form id='form' className='flex flex-col'>
                <input type='text' placeholder='Email or Username'/>
                <input type='password' placeholder='password'/>
                <input type='password' placeholder='confirm password'/>
            </form>
          <div className='links'>
          <button type="button" class="btn3 btn-sm">Signin</button>
                <button type="button" class="btn4 btn-sm">Continue  <FaArrowCircleRight/></button>
          </div>  
          </div>
        </div>
    </section>
  )
}
