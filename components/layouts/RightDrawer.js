import React, { useState, useContext } from 'react';
import { Drawer, Typography } from '@mui/material';
import CheckoutProduct from '../cards/DrawerCheckout';
import TextArea from '../form-elements/TextArea';
import Input from '../form-elements/Input';
import axios from "axios";
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import { CartContext } from '../../store/cart.context';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CartBadge from '../cards/CartIcon';

import Tooltip from '@mui/material/Tooltip';


const RightDrawer = ({open, onClose}) => {

  
  const {clearItemFromCart, cartItems, cartCount, cartTotal } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItems );

// const { image, price, title, rating, category,quantity, description, id } = cartItem;

  const deliveryFee = 50;
  const selectedGoodsCost = cartTotal;
  const vatAmount = selectedGoodsCost  * (0.05);
  const totalAmount = cartTotal + vatAmount + deliveryFee;
  const payableAmount= parseInt(totalAmount)
  const router = useRouter();
  const validEmail = new RegExp(
		"^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
	);

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState('');
  const [loading, setLoading] =useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    if (!validEmail.test(email)) {
      setEmailError('Email is required');
      return;
    } else{setEmailError('')} 
    setLoading(true);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk_test_7c6397333b9f0b13e384afd48f572de63abea089'  
    }
     await  axios.post('https://api.paystack.co/transaction/initialize', {
        amount: payableAmount,
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
       <div className=' md:w-[600px]'>
          <div className=' md:w-[600px] md:px-[2rem] border-b-1 border border-gray-200 flex justify-between flex-row'>
            <div>
            Your Cart  <CartBadge  value={cartCount}/>
            </div>
            <Tooltip  
              title="Empty Cart" 
              sx={{fontSize:'8px'}}>
              <RemoveShoppingCartIcon sx={{color:'#7eb143'}} onClick={clearItemHandler} className='cursor-pointer' />
            </Tooltip>
            <p onClick={onClose} className='items-end block md:hidden'><CancelIcon sx={{color:'#7eb143'}} /></p>
          </div>
          { cartCount >=1 ?
          <>
          <section className=" md:w-[600px]  flex flex-col  ">
              
                  {cartItems.map((cartItem) => (
                   <CheckoutProduct
                      key={cartItem.id}
                      cartItem={cartItem}
                 
                  />
                    ))}
          </section>
          <section className=" relative pb-[1rem] px-[2rem] flex flex-col md:flex-row gap-[1rem] bg-white">
                <div className='w-full md:w-[50%] flex flex-col gap-[1.8rem]'>
                    <p className="text-[22px] mb-[2rem] ">Customer details</p>
                    <Input type='email' label={"Email"} 
                      value={email}
                      placeholder="Enter your email address"
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
              <div className=" w-full md:w-[50%] text-[14px] flex flex-col justify-between ">
                  <p className="text-[22px] mb-[2rem] ">Order Summary</p>
                    <div className=" flex flex-col ">
                        <div className="w-full  text-[14px] gap-[1rem] flex flex-col rounded-[8px] border border-1 border-gray-200 p-[2rem]">
                        <div className="flex flex-row justify-between">
                          <p> Items Sub Total</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                            <small>$</small>
                            <strong >{cartTotal.toFixed(2)}</strong>
                          </p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <p>Delivery fees</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                              <small>$</small>
                              <strong >{deliveryFee.toFixed(2)}</strong>
                          </p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <p>VAT (5%)</p>
                          <p className="font-[200px] text-sm text-[#7f7b7b]">
                            <small>$</small>
                            <strong >{vatAmount.toFixed(2)}</strong> 
                          </p>
                        </div>
                        <div className="flex flex-row justify-between mt-[2rem]">
                          <p>Total</p>
                          <p className="text-[16px]">
                                  <small>$</small>
                                  <strong >{totalAmount.toFixed(2)}</strong>
                              </p>
                        </div>
                        </div>
                  </div>
                  <div className='md:w-[200px] md:ml-[auto]'>
                    <LoadingButton loading={loading} className="mt-[1rem] btn-primary" onClick={handleSubmit}>Pay Now</LoadingButton>
                
                  </div>
              </div>
          </section>
          </>
          : <div className='flex my-[auto] '>
            <img src='/images/empty-cart.webp' alt='Empty Cart' className='w-[100%] h-[100%]' />
            </div>}
            
       </div>
      </Drawer>
  );
};

export default RightDrawer;
