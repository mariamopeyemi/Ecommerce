import React, { useState } from 'react';
import { Drawer, Typography } from '@mui/material';
import CheckoutProduct from '../cards/DrawerCheckout';
import TextArea from '../form-elements/TextArea';
import Input from '../form-elements/Input';
import axios from "axios";
import { useRouter } from 'next/router';

const RightDrawer = ({open, onClose}) => {

     // const vatAmount = 170 + 10 + 170 + 170 * 0.025;
  const deliveryFee = 1500;
  const selectedGoodsCost = 2000;
  const product = deliveryFee + selectedGoodsCost;
  const vatAmount = product  * (0.05);
  const totalAmount = product + vatAmount;
  const router = useRouter();
  const validEmail = new RegExp(
		"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
	);
  // Number("100")
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    if (!validEmail.test(email)) {
      setEmailError('Email is required');
      return;
    } else{setEmailError('')} 
    // setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk_test_7c6397333b9f0b13e384afd48f572de63abea089'  
    }
     await  axios.post('https://api.paystack.co/transaction/initialize', {
        amount: totalAmount,
        email: email,
      }, {
        headers
      })
      // console.log(response, email, totalAmount, 'i am payload work')
      .then(function (response) {
        console.log(response);
        console.log(response, email, totalAmount, 'i work', response.data.data.authorization_url)
        router.push(response.data.data.authorization_url)
        
        // setInterval(() => {
        //   router.push('https://opeyemi.dev')
        // }, 5000);
      })
      .catch(function (error) {
        console.log(error);
        // toast.error
        alert('An error occured, please try again')
      });
    }
  
  return (
    <Drawer 
        anchor="right" 
        open={open} 
        onClose={onClose} 
        ModalProps={{ keepMounted: true }}>
       <div className='w-[60%] md:w-[600px]'>
          <div className='w-[60%] md:w-[600px] px-[2rem] border-b-1 border border-gray-200'>Your Cart</div>
          <section className="w-[60%] md:w-[600px]  flex flex-col  ">
              <CheckoutProduct
                  id="735262"
                  category='Men category'
                  description='Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard'
                  title="Versace Pour Homme Eau de Toilette Spray for Men, 6.7 Ounce"
                  price={65.17}
                  image="https://m.media-amazon.com/images/I/51a6469pD8L._AC_UL640_FMwebp_QL65_.jpg" 
                  rating={5}
                  />
          </section>
          <section className=" relative  px-[2rem] flex flex-col md:flex-row gap-[1rem] bg-white">
                <div className='w-[50%] flex flex-col gap-[1rem]'>
                    <p className="text-[22px] mb-[2rem] ">Customer details</p>
                    <Input type='email' label={"Email"} 
                      value={email}
                      // placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  
                    {emailError && <span className="text-[12px] text-end !text-red-500">{emailError}</span>}

                    <Input type='text' label={"Address"}
                      // value={email}
                      // placeholder="Enter your email address"
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  <TextArea type='text'  label={"Extra Details"} />
                  
                </div>
              <div className="w-[50%] text-[14px] flex flex-col justify-between ">
                  <p className="text-[22px] mb-[2rem] ">Order Summary</p>
                    <div className=" flex flex-col ">
                        <div className="w-full  text-[14px] gap-[1rem] flex flex-col rounded-[8px] border border-1 border-gray-200 p-[2rem]">
                        <div className="flex flex-row justify-between">
                          <p> Items Sub Total</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                            <small>$</small>
                            <strong >{selectedGoodsCost}</strong>
                          </p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <p>Delivery fees</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                              <small>$</small>
                              <strong >{deliveryFee}</strong>
                          </p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <p>VAT (5%)</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                            <small>$</small>
                            <strong >{vatAmount}</strong> 
                          </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[2rem]">
                          <p>Total</p>
                          <p className="text-[16px]">
                                  <small>$</small>
                                  <strong >{totalAmount}</strong>
                              </p>
                        </div>
                        </div>
                  </div>
                  <button className="mt-[1rem] btn-primary" onClick={handleSubmit}>Pay Now</button>
                
              </div>
          </section>
            
       </div>
      </Drawer>
  );
};

export default RightDrawer;
