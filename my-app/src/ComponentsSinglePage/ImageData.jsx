import { Box, Image} from '@chakra-ui/react'
import React,{useState} from 'react'
import ReactImageMagnify from 'react-image-magnify' 
import "./ImageData.css"

const ImageData = () => {
    const [src , setSrc ] = useState("https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510531_sd.jpg;maxHeight=640;maxWidth=550")

    const handleChange =(e)=>{
        setSrc(e.target.src )
    }



  return (
    <Box className="ImageMainBox" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" }} >
         
        
        
         <Box  style={{border:"2px solid #eef0f3" ,height:"60vh" , width:"76%" ,display:"flex"  ,justifyContent:"center"  }}>
            
         <ReactImageMagnify style={{padding:"20px" }} {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:src  ,
       
      },
     
         
   
    largeImage: {
        src :src ,
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

    </Box>
  )
}

export  {ImageData}
