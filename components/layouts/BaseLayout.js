import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import RightDrawer from './RightDrawer';
import Input from "../form-elements/Input";
import BaseContainer from "./BaseContainer";
import { CartContext } from '../../store/cart.context';
// import { useStateValue } from "../../pages/StateProvider";
// import { useGlobalContext } from "../../pages/context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartBadge from '../cards/CartIcon';


const BaseLayout = ({ children , onSearch, search, searchValue}) => {

  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleAddToCartClick = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const {cartCount } = useContext(CartContext);

  return (
    <div className=''>
      <header className="text-[16px] bg-[white] h-20 flex items-center">
        <BaseContainer className="flex  items-center justify-between mx-auto">
          <p className="!text-greenCode cursor-pointer title-2" onClick={()=>router.push('/')}>MARIAM STORE</p>
         {search && <form>
            <Input onChange={onSearch} value={searchValue} type="text" placeholder="Search ...  " className={'w-full md:w-[350px]'} />
          </form>}
          <nav className="hidden  !items-end md:flex flex-row ">
            <ul className="flex items-center gap-[2rem]">
                <li>
                <a 
                // onClick={()=>{router.push('/carts')}} 
                  className="text-black hover:opacity-50">
                    <span className="" style={{marginRight: "10px"}}>
                        Account
                    </span>
                    <AccountCircleIcon sx={{color:'#7eb143'}}
                    />
                  </a> 
                  </li>
                <li>
                  <a  
                    onClick={handleAddToCartClick} 
                    className="text-black hover:opacity-50">
                    <span className="" style={{marginRight: "10px"}}>
                        Cart
                    </span>
                    <CartBadge  value={cartCount}/>
                  </a> 
                </li>
            </ul>
          </nav>
       
          {/* side drawer */}
           < RightDrawer
            open={isDrawerOpen} 
            onClose={handleDrawerClose} 
            />
        {/* Mobile Nav */}
          {/* <nav className={`w-screen h-[30vh] serviceCard p-[6rem] z-40 fixed top-[0px] left-0 block md:hidden transition-all duration-300 ${showNav ? " translate-x-0" : " -translate-x-full"}`}>
            <ul className="flex flex-col items-end">
            <li><a onClick={()=>{router.push('/carts')}} className="text-black hover:opacity-50">
                  
                  <span className="" style={{marginRight: "10px"}}>
                      Account
                  </span>
                  <AccountCircleIcon
                  />
                 </a> </li>
                 <li><a  
                // onClick={()=>{router.push('/carts')}}
                onClick={handleAddToCartClick} 
                className="text-black hover:opacity-50">
                  
                  <span className="" style={{marginRight: "10px"}}>
                      Cart
                  </span>
                  <AddShoppingCartIcon 
                  color='#f9f9f9'
                  fontSize="small"
                  />
                  <span className="font-bold mx-[12px]">
                  {cartCount}
                  </span>
                </a> </li>
            </ul>
          </nav> */}
            <p
              className=" z-50 text-[30px] my-[auto] md:hidden"
              onClick={handleAddToCartClick} 
            >
                <CartBadge  value={cartCount}/>
            </p> 
        </BaseContainer>
      </header>
      <main className="min-h-[90vh] bg-white ">{children}</main>
      <footer className=" relative h-[5vh] md:text-[16px] text-[12px] bg-white items-center flex flex-row justify-center">
         <p> 
          &copy; {new Date().getFullYear()}
          <span className='!text-[#7eb143]'> Mariam Store</span>  &nbsp;
        </p>
        <p>All Rights Reserved</p>
        </footer>
    </div>
  );
};

export default BaseLayout;
