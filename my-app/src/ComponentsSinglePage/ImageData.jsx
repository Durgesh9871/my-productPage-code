import { Box, Image} from '@chakra-ui/react'
import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ImageData = () => {
  return (
    <Box className="ImageMainBox" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}} >
         
        
        
         <Box  style={{border:"1px solid blue" ,height:"60vh" , width:"76%" ,display:"flex"  ,justifyContent:"center" , alignItems:"center"  }}>
            
         <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: "https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70"  ,
        
    },
    largeImage: {
        src: "https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
        width: 1200,
        height: 600
    }
}} />


         </Box>

       {/*  diff images three----------------------------- */}
         <Box style={{border:"1px  black" , height:"10vh" , width:"60%" , display:"flex" ,justifyContent:"center"}}>
            <Box border="1px solid grey">
                <Image src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image"  width="100%" height="100%" /></Box>
            <Box border="1px solid grey" >
            <Image src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box>
            <Box border="1px solid grey" >
            <Image src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box>
        </Box>

    </Box>
  )
}

export  {ImageData}
