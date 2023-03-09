// import BaseLayout from "@/components/layouts/BaseLayout";
import React, {useState, useEffect} from "react";
import ProductCard from "../components/cards/ProductCard";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import MyPagination from "../components/Pagination";

const Home = () => {

	const [output, setOutput] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState('');



// search function
    const onSearch = (e) => {
        // setFilter(e.target.value);
    }

  // const filteredData = output.data.filter((item) =>
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );



// pagination function
    const countNo =()=>{
        const count = Math.ceil( output.length / limit);
        return count;
    }
    const paginate = (list) => {
        const itemsPerPage = limit;
        const numberOfPages = countNo();
      
        const newList = Array.from({ length: numberOfPages }, (_, index) => {
          const start = index * itemsPerPage
          return list.slice(start, start + itemsPerPage)
        })
      console.log(newList, 'i am new list')
        return newList
    }
    const nextPage = () => {
        setPage((page) => {
          let nextPage = page + 1
          if (nextPage > countNo() - 1) {
            nextPage = 0
          }
          return nextPage
        })
    }
    const prevPage = () => {
        setPage((page) => {
          let prevPage = page - 1
          if (prevPage < 0) {
            prevPage = countNo() - 1
          }
          return prevPage
        })
    }

 // on page loadComponents, fetch all product
    useEffect(() => {
        const handleSubmit = async () => {
          
          const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer sk_test_7c6397333b9f0b13e384afd48f572de63abea089'  
          }
          try {
           const allData = await  axios.get('https://fakestoreapi.com/products',  {
              headers
            })
            const myData= allData.data;
            // const { data } = allData;
            setOutput(myData)
           console.log(  myData, output, 'i am key info')
          } catch (error) {
              throw error
            }
            };
            handleSubmit()
    }, [])
 

  return <BaseLayout onSearch={onSearch} searchValue={filter} search>
   <div className="home">
            <div className="home__container">
                {/* <img className="home__image hidden xl:flex" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/Mastercard/Nigeria/GTBANK/2021/June/1500x600_2._CB665054876_.jpg" alt=""/> */}
                <img className="w-full" src="https://ng.jumia.is/cms/Homepage/2021/W29/NG_TOPSTRIP_NSF_Desktop-(1).gif" alt=""/>
                <div className="md:mx-[2rem]  mb-[2rem] grid gap-[1rem] grid-cols-2  md:grid-cols-4  ">
                {paginate(output)[page]?.length > 0
                ? paginate(output)[page].map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                        description={item.description}
                        rating={item.rating.rate}
                    />
                    ))
                    : <div className="min-h-[80vh]  w-[100%] flex flex-row justify-center items-center">
                        <p className="m-[auto]  title-2 text-center">fetching products..</p>
                        </div>}
                    <>
                    {/* <ProductCard
                   
                        id="843643"
                        title="PlayStation 5 Console"
                        price={875.99}
                        image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <ProductCard
                        id="234393"
                        title="Apple iPhone 12 Pro, 128GB, "
                        // title="Apple iPhone 12 Pro, 128GB, Pacific Blue - Fully Unlocked (Renewed)"
                        price={1250}
                        image="https://images-na.ssl-images-amazon.com/images/I/71z4b3G3GAL._AC_UL320_SR320,320_.jpg" 
                        rating={4}
                    />
                    <ProductCard
                        id="097272"
                        title="NIKE Plus Cushion Socks (6-Pair)"
                        price={46.99}
                        image="https://m.media-amazon.com/images/I/81Y49CpPftL._AC_UL320_.jpg" 
                        rating={5} 
                    />
                     <ProductCard
                        id="532682"
                        title="NIKE Air Max Plus SE TN1 Tuned Men's Sneaker"
                        price={345.73}
                        image="https://m.media-amazon.com/images/I/61xbX2FrDCS._AC_UL640_FMwebp_QL65_.jpg" 
                        rating={4}
                    /> */}
                    </>
                </div>

                <div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
                    <p>showing result 1-{limit} of {output.length} items</p>
                    <MyPagination page={page + 1}  count={countNo()}
                      onClick={(e) => {
                        console.log(e.target.innerText)
                        setPage(parseInt(e.target.innerText)-1);
                      }} 
                        onBack={prevPage}
                        onNext={nextPage}
                      />
                </div>
            </div>
        </div>
  </BaseLayout>;
};

export default Home;
