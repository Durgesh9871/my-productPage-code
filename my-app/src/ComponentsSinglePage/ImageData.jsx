import "./ImageData.css"
import { Box, Image} from '@chakra-ui/react'
import React,{useState} from 'react'
import ReactImageMagnify from 'react-image-magnify' 
import {AiFillHeart} from "react-icons/ai" ;
import {FiHeart} from "react-icons/fi"

const ImageData = ({image}) => {
    //  console.log("image" ,image)
    const [src , setSrc ] = useState(false)
    const [wishlistColor , setWishlistColor] = useState(false)
      const url = src ? src :image 
    
 
   const handleChange =(e)=>{
        setSrc(e.target.src )
    }

    //  Wish list function ------------------------------------------------
    const handle = ()=>{
      setWishlistColor(!wishlistColor)
      
    }
  
    // { image?.map((item)=>{
    //   return (
    //     console.log("item" ,item)
    //   )
    // })}


  return (
    <Box className="ImageMainBox" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" ,position:"relative"}} >
         
        
        
         <Box   style={{border:"2px solid #eef0f3" ,height:"60vh" , width:"76%" ,display:"flex"  ,justifyContent:"center"  }}>
            
         <ReactImageMagnify style={{padding:"20px" }} {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:url  ,
       
      },
     
         
   
    largeImage: {
        src :url ,
        width: 1600,
        height: 700 
    } ,
    enlargedImagePosition :"beside" ,
    enlargedImageContainerDimensions: {
        width: "200%",
        height: "150%"
      },
      shouldUsePositiveSpaceLens: true 
      
}} />
  
 

         </Box>

       

       {/*  diff images three----------------------------- */}
         <Box style={{ height:"10vh" , width:"60%" , display:"flex" ,justifyContent:"center", marginTop:"20px"}}>
            <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px" >
                <Image onMouseOver={handleChange} cursor="pointer"
                  src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image"  width="100%" height="100%" /></Box>
            <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px"  >
            <Image onMouseOver={handleChange} cursor="pointer" src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/q/j/c/-original-imagh3wecapg5gqn.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box>
            <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px" >
            <Image onMouseOver={handleChange} cursor="pointer" src="https://rukminim1.flixcart.com/image/312/312/ksyz8280/computer/8/v/i/cb-11igl05-thin-and-light-laptop-lenovo-original-imag6fh8sqpuk3ts.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box>
        </Box>

       {/*  Wish list --------------------------------------------------------- */}
       <Box onClick={handle} cursor="pointer" position="absolute" top={{base:"12px"}} right={{base:"80px" }} fontSize="25px">{wishlistColor ? <AiFillHeart color="ff5172"  /> : <FiHeart color="ff5172" />}
         </Box>
    </Box>
  )
}

export  {ImageData}
