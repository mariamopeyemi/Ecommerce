import React, {useState, useContext} from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { CartContext } from '../../store/cart.context';

function CheckoutProduct({ cartItem, }) {

    const [value, setValue] = useState(2);
    const doublePrice = cartItem.price * cartItem.quantity;


    const { image, price, title, rating, category,quantity, description, id } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } =
      useContext(CartContext);

    const handleAddToCart = () => addItemToCart(cartItem);
    const handleRemoveFromCart = () => removeItemToCart(cartItem);


    return (<>
        <div className="text-[14px] flex flex-col md:flex-row gap-[2rem] justify-between px-[2rem] items-center">
                <div>
                  <img src={image} alt='product image' className="rounded-[10px] w-[150px] h-[auto]" />
                </div>
                <div className="flex flex-col  justify-between md:w-[70%] ">
                 <div>
                        <Typography className='font-bold text-[14px] !leading-[2rem] !text-black text-start'> {title} </Typography>
                        <Typography className='sub-title2 text-black text-start'> {description} </Typography>
                         <div className='flex flex-row justify-between'>
                                <Typography className='font-semibold text-black text-start text-[12px]'> {category} </Typography>
                                <Rating
                                  name="simple-controlled"
                                  value={rating}
                                  precision={0.1}
                                  onChange={(event, newValue) => {
                                      setValue(newValue);
                                  }}
                                  size="small"
                    />
                        </div>
                        {/* <p onClick={clearItemHandler}>Delete</p> */}
                 </div>
                 <div className="flex flex-row  justify-between ">
                   <p className="text-[16px]">
                        <small>$</small>
                        <strong >{price}</strong>
                    </p>
                    <div className="flex flex-row gap-[1rem]">
                
                    <p onClick={handleAddToCart} className=" w-[20px] text-center h-[25px] rounded-[4px] bg-[#f2f2f2] cursor-pointer">+</p>
                    <p >{quantity}</p>
                    <p onClick={handleRemoveFromCart} className=" w-[20px] text-center h-[25px] rounded-[4px] bg-[#f2f2f2] cursor-pointer">-</p>
                    </div>
                    <p className="text-[16px]">
                            <small>$</small>
                            <strong>{doublePrice.toFixed(2)}</strong>
                    </p>
                   </div>
                </div>
              </div>
              <hr className="my-[2rem] bg-gradient-to-r from-[green] via-white to-[#a2c4a2]  h-[2px] border-0" />
              </>
    )
}

export default CheckoutProduct;
