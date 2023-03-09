import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import BaseLayout from "../components/layouts/BaseLayout";
import Input from "../components/form-elements/Input";
import TextArea from "../components/form-elements/TextArea";
import axios from "axios";
import { useRouter } from 'next/router';
import CheckoutProduct from "../components/cards/CheckoutProduct";


export default function Home() {

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
    const headers = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer sk_test_7c6397333b9f0b13e384afd48f572de63abea089'
    
    }
const fetchAll= async () => {
  const myEachData =  await axios.get('https://fakestoreapi.com/products',{
    headers
  })
  console.log('i work', myEachData.data)
}

    // const [{cart, user}, dispatch] = useStateValue();
  return (
    <BaseLayout >

      {/* Cart with Product description Section */}
      <img className="w-full" src="https://ng.jumia.is/cms/Homepage/2021/W29/NG_TOPSTRIP_NSF_Desktop-(1).gif" alt=""/>

     <section className=" bg-[#fbfbfb] h-[auto] min-h-[80vh] flex flex-col  justify-between">
       <p className="text-[22px] m-[2rem]">Your selected product(s)</p>
          <section className=' p-[2rem] flex md:flex-row flex-col'>
            <section className="w-[100%] md:w-[65%] flex flex-col  ">
            <CheckoutProduct
                id="735262"
                category='Men category'
                description='Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard'
                title="Versace Pour Homme Eau de Toilette Spray for Men, 6.7 Ounce"
                price={65.17}
                image="https://m.media-amazon.com/images/I/51a6469pD8L._AC_UL640_FMwebp_QL65_.jpg" 
                rating={5}
                />
            <CheckoutProduct
                id="735262"
                category='category'
                description='description that is plenty description that is plenty lorem ipsum lorem impsum lore '
                title="Versace Pour Homme Eau de Toilette Spray for Men, 6.7 Ounce"
                price={65.17}
                image="https://m.media-amazon.com/images/I/51a6469pD8L._AC_UL640_FMwebp_QL65_.jpg" 
                rating={5}
                />
              
              {/* <button className=" btn-primary" onClick={handleVerification}>Verify Now</button> */}
            </section>
            <section className="relative w-[100%] md:w-[35%] p-[2rem] flex flex-col gap-[1rem] bg-white ">
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
            <div className="text-[14px] flex flex-col">
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
            <button className=" btn-primary" onClick={handleSubmit}>Pay Now</button>
            </section>
          </section>
      </section>
    </BaseLayout>
  );
}

