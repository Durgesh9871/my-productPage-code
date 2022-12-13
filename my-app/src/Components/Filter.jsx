import { Box , Checkbox, Text } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
  return (
    <Box>
        <Box style={{display:"" ,border:"1px solid black" , width:"90%" , margin:"auto" , height:"200px" , flexDirection:"column" ,justifyContent:"flex-start" , textAlign:"left"}}>
        <Text fontSize='17px' fontWeight="500" color="#1d252c">Brand</Text> 
         
         {/* Checkboxes are here  */}
         <Checkbox >Checkbox</Checkbox>
  
        </Box>
      
    </Box>
  )
}

export  {Filter}
