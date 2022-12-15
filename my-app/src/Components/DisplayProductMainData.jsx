import { Box, Heading , Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./ProductHeadings.css"
import Carousel from "better-react-carousel";
import { Link } from 'react-router-dom'
import {AiFillHeart} from "react-icons/ai" ;
import {FiHeart} from "react-icons/fi"
import { StarIcon } from '@chakra-ui/icons'




const DisplayProductMainData = ({src , name  ,price ,model , review ,realPrice})=>{
    let style = {
      position:"relative" , 
    
    }
 const [value , setValue] = useState(false)
    const [effect , setEffect] = useState(false)
    const [wishlistColor , setWishlistColor] = useState(false)

    

   
    //  here is carousel is started---------------------------------------------
    
    const handleChange = ()=>{
      setValue(1500)
      
} 
      
   useEffect(()=>{
    const id = setTimeout(()=>{
      setValue(false)
    },6500)
    return ()=>{
      clearTimeout(id)
    }
   },[value])

   const myDot = ({isActive})=>{
   return ( <span
    style={{
      display: 'inline-block',

      height : isActive ? "7.5px" :"6px" , 
      width: isActive ? "7px" :"6px " ,
      borderRadius:"50%" , 
      background: isActive ? "#266de8" :"#ccc" , 
    }}
  ></span> )
   }
   //  here is carousel is started---------------------------------------------
      
    

    //  here wishlist shown --------------------------------------------
const handleProductHover = ()=>{
  // console.log(effect)
  setEffect(true)
}
const closeProductHover = ()=>{
  // console.log(effect)
  setEffect(false)
}
// here wishlist remove----------------------------------------

   
  const handle = ()=>{
    setWishlistColor(!wishlistColor)
  }
  const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 

  // console.log(ans)

//  const x = total 
//  const y = buy 
//  y/x * 100 
//  x * 100 - y*100 = num/100
      
 return (
    <Box shadow="base" className='hoverProductDiv' w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"320px", sm: "320px", md: "324px", lg: "324px" ,xl: "330px",'2xl': "365px",}}  style={style}  >
      
      {/*  Corousel images are here --------------------------------------------------------- */}
       <div id='productDataImages' style={{ height:"auto", }} onMouseOver={handleChange}  >
        {/* <img src={src} alt={name}/> */}

        <Carousel hideArrow={true} loop={true} showDots={true} dot = {myDot}   autoplay={"none"} dotColorActive="#266de8" >
          {src.map((img,i) => (
            <Carousel.Item key={i}>
              <Link>
                <Img w="full" src={img.imageFront}   width="230px" margin="auto"/>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>

       </div>
       {/* corousel images ends here ----------------------------------------------------------- */}
       

       {/*  Products details are here ------------------- */}
       <Box id='productDataDesc' position="absolute" bottom="20px" onMouseOut={closeProductHover} onMouseOver={handleProductHover}  style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px" ,cursor:'pointer'  }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
          
          {/*  wishlist on hover---------------------------------------- */}
    { effect && (<Box marginBottom="5px" ><Box onClick={handle} style={{border:"2px solid #EBECEE" , width:"60%" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" }}>{wishlistColor ? <AiFillHeart color="red"  /> : <FiHeart color="red" /> } <Text ml={2}>WISHLIST</Text> </Box> </Box>)}

      {/*  reviws star on hover ----------------------------------------------- */}
     {effect && <Box style={{display:"flex" ,justifyContent:"space-between" }}>
         <Box>
         <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{model}</Heading>
         </Box>
         <Box >
        
         {Array(5)
            .fill('')
            .map((_, i) => (
              
            
              <StarIcon
                key={i}
                color={i < (review) ? 'teal.500' : 'gray.300'} 
                width="12px" height="12px"
              />
             
            ))}
         </Box>
        
         </Box> }

         {/*  Ends here hover ------------------------------------ */}

       {!effect &&  <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{model}</Heading> }
        {!effect && <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{name}</Text> }
         
         <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
          </Box>
          
            
       </Box>

        
       
    </Box>
 )
}

export {DisplayProductMainData}