import React from 'react' 
import "./ProductPage.css"
import {Box , Img, SimpleGrid, Text} from "@chakra-ui/react" 
import { ProductHeadings } from '../Components/ProductHeadings' 
import { AllProductPages, ResponsiveAllProductPages } from '../Components/AllProductPages'
import { Sorting } from '../Components/Sorting'
import { Filter } from '../Components/Filter'
import { Link } from 'react-router-dom'
// import Carousel from "better-react-carousel" 
import { DisplayProductMainData } from '../Components/DisplayProductMainData'






const ProductPage = () => {

  let ProductPagesData = [
    {id:"1" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=640;maxWidth=550" , 
    text:"Laptop" , 
    check:"" , 
    },
    {id:"2" ,
    src:"https://m.media-amazon.com/images/I/71Q0E2DYf2L._AC_SL1500_.jpg" , 
    text:"Mobiles" , 
    check:"" , 
    },
    {id:"3" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501916_sd.jpg;maxHeight=640;maxWidth=550" , 
    text:" Tv & Projector" ,
    check:"" ,  
    },
    {id:"4" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_5721600-mackbook-air-mmt-404395-0419-der-214532.jpg;maxHeight=302;maxWidth=504" , 
    text:"Major Appliance" , 
    check:"" , 
    },
    {id:"5" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426002_sd.jpg" , 
    text:"Watch" , 
    check:"" , 
  }

  ]
  
  const bannerSlider = [
    {
      id: "1",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e",
    },
    {
      id: "2",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62a882919ddbf",
    },
  
    {
      id: "3",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7b6d14949",
    },
    {
      id: "4",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b797c88952",
    },
    {
      id: "5",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b79d5c017f",
    },
    {
      id: "6",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a04f421e",
    },
    {
      id: "7",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a8d9a432",
    },
    {
      id: "8",
      image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7acabe3b2",
    },
  ];

  return (
    <Box>
   <hr className='horizatalRule'/> 
   
   <Box style={{width:"92%" , border:"2px  red" , margin:"auto"}}>
   <ProductHeadings productPageName="Laptops" anotherPage="Laptop & Computer Deals" />
   
   <div id="productAllPagesLink" style={{display:"flex" , justifyContent:"space-between" }}>
    <div id='allPagesLink' >
         {
          ProductPagesData.map((item)=>{
            return (
              <AllProductPages key={item.id} src={item.src} text={item.text} check={item.check} />
            )
          })
         }
   </div>

   <div id="ResponsiveAllProductPages">
          <ResponsiveAllProductPages  data={ProductPagesData}  />
    </div>


{/*  Sorting menu bar -------------------------------------------------- */}
    <Sorting />
   
</div>
        <hr className='horizatalRule1'/>
    </Box>
    {/* All code same   ----------------Product all pages above  */}  

    
    {/*  Filtering and display data starts here ----------------------------------------------- */}
    
     <Box id='filterMainBox_&_DisplayData' style={{border:"1px solid red" ,width:"92%" , margin:"auto" , height:"200vh" , display:"flex" , justifyContent:"space-between" }}>
       
       {/*  Filter component---------------------------------------------------------- */}
       <Box id='FilterMainBox' shadow="md" style={{border:"0.1px solid #e7e9ee" , height:"100vh" , width:"17%" ,  }}>
         
         <Box>
         <Filter />
          </Box>
       </Box>
             
 {/*   Display product data is started from here --------------------------Main Data */}
       <Box id='DisplayDataBox' style={{border:"1px solid green" , height:"200vh" , width:"82%"}} >
         
       <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} justifyItems="center" >
            {/* {dataIsLoading && arr.map((_,id)=>{
              return (<ProductSkeleton key={id}/>)
            })}
            
            {allProductData.length > 0 && allProductData.map((item)=>{
              return (
               <Link to={`/product/${item.id}`} key={item.id} > <ProductMainData  src={item.imgUrl} name={item.name} weight={item.weight} price={item.price} des={item.des} /></Link>
              )
            })} */}

            
           <DisplayProductMainData src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6501269-MMT-545157-0523-f4752dee-6c11-484d-a6ae-dadbcae80c2d.jpg;maxHeight=302;maxWidth=504" name="Lapi"  weight="4Kg" price="40" des="Its an dummy" id="1" />

           <DisplayProductMainData src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6501269-MMT-545157-0523-f4752dee-6c11-484d-a6ae-dadbcae80c2d.jpg;maxHeight=302;maxWidth=504" name="Lapi"  weight="4Kg" price="40" des="Its an dummy" id="1" />

           <DisplayProductMainData src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6501269-MMT-545157-0523-f4752dee-6c11-484d-a6ae-dadbcae80c2d.jpg;maxHeight=302;maxWidth=504" name="Lapi"  weight="4Kg" price="40" des="Its an dummy" id="1" />

          </SimpleGrid>

         
        
       </Box>

     </Box>

    
   
    </Box>
  )
}

export   {ProductPage}
