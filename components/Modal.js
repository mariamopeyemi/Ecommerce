import React, {useState} from 'react';
import { Dialog, Stack } from '@mui/material';
import Input from './form-elements/Input';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';


const WaitlistModal = ({toggle, open}) => {
  const router = useRouter();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');

  const validEmail = new RegExp(
		"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
	);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!fullName) {
      setNameError('Name is required');
      return;
    }else{setNameError(!nameError)}
  
    if (!validEmail.test(email)) {
      setEmailError('Email is required');
      return;
    } else{setEmailError('')}
  
    setLoading(true);
        console.log('====================================');
        console.log( 'i work sha' ,fullName, email, );
        console.log('====================================');
        router.push('/')
     await  axios.post('https://staging-api.xerobugs.com/api/v1/xerobugs/sophie/add', {
      
        fullName: fullName,
        email: email,
      })
      .then(function (response) {
        console.log(response);
        setLoading(false);
        toggle()
        toast.success('Thank you for your interest in Sophee!')
      })
      .catch(function (error) {
        console.log(error);
        toast.error('An error occured, please try again')
      });
    }
    
  return (
    <div>
       <Dialog onClose={toggle} open={open} className='md:w-[500px] md:mx-[auto] ' >
 
        <section className='p-[2rem] md:h-[500px] flex flex-col align-middle justify-center '>
        <p className='text-end cursor-pointer font-medium' onClick={toggle}>&#10005; </p>
        <div className='mb-[4rem]'>
          <p className='title-2 md:w-[90%] text-center mx-[auto]'>We’re Glad To Have You!</p>
          <p className='sub-title2 md:w-[100%] text-center mx-[auto]'>Thank you for your interest in Sophee, <br/>
            kindly fill out the form to get notified when we launch</p>
         </div>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                label={"FULL NAME"}
                type="text"
                value={fullName}
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
              />
              {nameError && <span className="text-[12px] mt-[0] !text-red-500">{nameError}</span>}

              <Input
                label={"Email"}
                type="email"
                value={email}
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span className="text-[12px] mt-[0] !text-red-500">{emailError}</span>}

              <LoadingButton 
              loading={loading}
              className='btnprop text-[14px] !w-[100%]'
              type="submit">Register</LoadingButton>
            </form>
          </div>
        </section>
        </Dialog>
    </div>
  )
}

export default WaitlistModal;