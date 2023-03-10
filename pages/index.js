
import React, {useState, useEffect} from "react";
import ProductCard from "../components/cards/ProductCard";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import MyPagination from "../components/Pagination";

const Home = () => {

	const [output, setOutput] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');


// filter by search function
  const searchResults = React.useMemo( () =>  output.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ), [searchTerm, output]);
    

  const onSearch = (e) => {
        setSearchTerm(e.target.value);
  }



// pagination function
    const countNo =()=>{
        const count = Math.ceil( searchResults.length / limit);
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
    const displayableItems = paginate(searchResults)[page];

  return (
  <BaseLayout onSearch={onSearch} searchValue={searchTerm} search>
        <div className="home">
                {/* <img className="home__image hidden xl:flex" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/Mastercard/Nigeria/GTBANK/2021/June/1500x600_2._CB665054876_.jpg" alt=""/> */}
                <img className="w-full" src="https://ng.jumia.is/cms/Homepage/2021/W29/NG_TOPSTRIP_NSF_Desktop-(1).gif" alt=""/>
                <div className="md:mx-[4rem]  my-[2rem] grid gap-[1rem] grid-cols-2  md:grid-cols-4  ">
                    {displayableItems?.length > 0
                    ? displayableItems.map((item, index) => (
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
                        : <div className="min-h-[80vh] h-[auto]  w-[100%] flex flex-row justify-center items-center">
                            <p className="m-[auto]  title-2 text-center"> {searchTerm ? "no results found": "fetching products.."}</p>
                          </div>}
                    </div>
        </div>
        <div className=" mb-[10px] mt-[20px] flex justify-between items-center px-[20px] flex-wrap">
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
  </BaseLayout>);
};

export default Home;