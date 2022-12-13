import { Box, Heading , Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./ProductHeadings.css"
import Carousel from "better-react-carousel";
import { Link } from 'react-router-dom'




const DisplayProductMainData = ({src , name , weight ,price , des ,id})=>{
    let style = {
      position:"relative" , 
    }
 const [value , setValue] = useState(false)
    

    const imageData = [
      {id:1 , src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457397_sd.jpg;maxHeight=200;maxWidth=300"},{id:2 , src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503094_sd.jpg;maxHeight=200;maxWidth=300"},{id:3 , src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6386/6386391_sd.jpg;maxHeight=200;maxWidth=300"},
    ]

    const handleChange = ()=>{
      setValue(1500)
      
    }
   useEffect(()=>{
    const id = setTimeout(()=>{
      setValue(false)
    },6000)
    return ()=>{
      clearTimeout(id)
    }
   },[value])

  //  const handleClose = ()=>{
  //   setValue(false)
  //  }
      
 return (
    <Box shadow="base" className='hoverProductDiv' w={{base:"90vw", sm: "55vw", md: "43.5vw", lg: "25vw" ,xl: "25vw",'2xl': "23vw",}} h={{base:"434px", sm: "65vh", md: "74vh", lg: "415px" ,xl: "459px",'2xl': "459px",}} style={style}  >
      
       <div id='productDataImages' style={{ height:"auto"}}  onMouseOver={handleChange} >
        {/* <img src={src} alt={name}/> */}

        <Carousel loop={true} showDots={true}  autoplay={value}>
          {imageData.map((img) => (
            <Carousel.Item key={img.id}>
              <Link>
                <Img w="full" src={img.src} />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>

            {/* <Box style={{display:"flex" , justifyContent:"space-evenly"}}>
            {imageData.map((item)=>{
              return (<img key={item.id} src={item.src} alt="hello" width="40px" height="40px"  />)
            })}
            </Box> */}
       </div>
       
       <div id='productDataDesc' style={{border:"2px  #EBECEE" ,height:"35%" , padding:"10px 10px 10px 10px"}}>
         <Heading fontSize="15px" fontWeight="600" color="#4A4A54">{name}</Heading>
         <Text fontSize='14px' fontWeight="500" color="#727272" overflow="hidden" mt={3} mb={3}>{des}</Text>
          <Heading fontSize='14px' fontWeight="500" color="#4A4A54" mt={3} mb={3}>{weight}</Heading>
           
           {/* main div of mrp price ------------------------ */}
           <Box id='productDescDisplayFlex' w={{base:"84vw", sm: "50vw", md: "40.5vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} style={{display:"flex", border:"2px  red" , justifyContent:"space-between", alignItems:"center" ,position:"absolute" }} bottom={{base:"22px", sm: "25px", md: "25px", lg: "25px" ,xl: "22px",'2xl': "25px",}}>
            
            <div><Heading fontSize='17px' fontWeight="600" color="#D11243">MRP:{price}</Heading></div>
            {/* <div>
              <ProductCartButton  />
            </div> */}
            
           </Box>
            
       </div>
       {/* <div style={{display:"flex" , justifyContent:"center" , alignItems:"center", marginTop:"7px" ,fontWeight:"600" , border:"2px solid red" , position:"sticky" , paddingBottom:"0px"}}> 
        
        <div> <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" /></div>
         <Text ml="4px" fontSize="14px" color="#aeaeae" >Today in 90 min</Text>
         
         
       </div> */}
    </Box>
 )
}

export {DisplayProductMainData}