import { Box ,Text ,Image} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const RecentBought = () => {
  const [data , setData] = useState([])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1247 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
     laptop: {
      breakpoint: { max: 1246, min: 1025 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 723 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 723, min: 364 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 363, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  //  For getting the data from api of recent bought  
  const getData = ()=>{
     axios.get('https://long-pear-giraffe-gown.cyclic.app/api/peopleAlsoBoughtMens')
     .then((res)=>setData(res.data))
     .catch((err)=>alert(`Please refresh the page ${err}`))
    }


useEffect(()=>{
   getData()
},[])


  return (
    <Box pb="50px">
      <Box ml={{base:"10px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} pt="25px" mb="35px" >
       <u style={{color:"#303030"}}><Text textAlign="left" fontWeight={600} fontSize="2xl" color="#303030">You might be interested in</Text></u>
      </Box>

      {/*  Slider for product is here ------------------------------- */}
     <Box ml={{base:"2px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} >
     <Carousel responsive={responsive} > 
    
     {data.length > 0 && data.map((item)=>{
       return (
       <Image src={item.mainImage} alt={item.categories} boxSize={{base:"300px", sm: "300px", md: "300px", lg: "300px",xl: "300px",'2xl': "300px"}}  shadow="2xl" cursor="pointer" />
        
          )
     })}
    
 
</Carousel>
</Box>
    
    </Box>
  )
}

export  {RecentBought}
