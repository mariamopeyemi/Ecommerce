import React from 'react';
import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';


function Product({ id, title, image, price, rating ,category, description,}) {
    const [value, setValue] = React.useState(2);
    // const  [rate, setRate] = React.useState(2);
    // const [{ cart }, dispatch] = useStateValue();
    
    const addToCart = () => {
        // dispatch the item into the data layer
        // dispatch({
        //     type: "ADD_TO_CART",
        //     item: {
        //         id: id,
        //         title: title,
        //         image: image,
        //         price: price,
        //         rating: rating,
        //     },
        // });
    };
    return (
       
        <div className='serviceCard min-h-[400px] p-[30px] md:p-[2rem] w-[100%] max-w-[400px] flex flex-col justify-between  '>
        <div>
             <img src={image} alt="" className='max-h-[200px] min-h-[150px] w-[100%] object-contain mb-[15px]' />    
        </div>
        <div className=' flex flex-col md:h-[50%] '>
        <Typography className='sub-title-nude !text-black text-start'> {title} </Typography>
        <Typography className='text-black text-start text-[12px]'> {category} </Typography>
          
         <Typography className='text-black text-start '> {description} </Typography>
                <p className="">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    precision={0.1}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    size="small"
                    />
                <button onClick={addToCart} className='btn-sec text-center hover:bg-[#faaf00]' >Add to Cart</button>
        </div>
    </div>
    )
}

export default Product;
