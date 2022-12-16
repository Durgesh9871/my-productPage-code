import { Box } from '@chakra-ui/react'
import React from 'react'

const ImageData = () => {
  return (
    <Box className="ImageMainBox" style={{display:"flex"}} >
         
         <Box style={{border:"1px solid black" , height:"40vh" , width:"20%"}}>

         </Box>
         <Box  style={{border:"1px solid blue" ,height:"70vh" , width:"76%" ,display:"flex"  ,justifyContent:"center" , alignItems:"center"}}>
            <img src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image" />
         </Box>

    </Box>
  )
}

export  {ImageData}
