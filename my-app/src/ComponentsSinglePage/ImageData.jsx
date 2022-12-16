import { Box, Image} from '@chakra-ui/react'
import React from 'react'

const ImageData = () => {
  return (
    <Box className="ImageMainBox" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}} >
         
        
         <Box  style={{border:"1px solid blue" ,height:"60vh" , width:"76%" ,display:"flex"  ,justifyContent:"center" , alignItems:"center" }}>
            <img src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70"  alt="image"    />
         </Box>

         {/*  Diffrent images -------------- */}
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
