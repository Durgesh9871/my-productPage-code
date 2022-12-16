import { Box } from '@chakra-ui/react'
import React from 'react' 
import { ImageData } from '../ComponentsSinglePage/ImageData'

const SinglePageProduct = () => {
  return (
    <Box className="SingleProductMainDiv" background="#f1f3f6"  style={{border:"2px  green" , height:"200vh" ,}}>
        {/* <hr className='horizatalRule' style={{marginBottom: "10px"}} /> */}
        {/* <br /> */}
        {/*  Main Box of Single Page ------------------------------------------------ */}
        <Box className='SingleProductMain' shadow="2xl"  mt="10px" background='#ffffff' style={{border:"1px solid red" , height:"200vh"  , width:"90%" , margin:"auto" , display:"flex" ,justifyContent:"space-between"  }}>

        {/* Image Data Main box ---------------------------------------------------- */}
        <Box className='SingleProductMainImage' mt={5} width="40%" style={{border:"1px solid  yellow" , height:"200vh"}}>
        <ImageData />
        </Box>

        {/* Single Page Info Main Div ----------------------------------------------------- */}
        <Box className='SingleProductMainData' mt={5} width="58%" style={{border:"1px solid  grey" ,height:"200vh"}}>

        </Box>
        </Box>
        

    </Box>
  )
}

export  {SinglePageProduct}
