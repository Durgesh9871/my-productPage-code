import { Box , Checkbox, Text } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
    
   
    const filterNameData = [
        {
        id:"1"  ,   
        name:"Microsoft" , 
        size:"5" , 
    },
    {
        id:"2"  ,   
        name:"HP" , 
        size:"5" , 
    },
    {
        id:"3"  ,   
        name:"ASUS" , 
        size:"5" , 
    },
    {
        id:"4"  ,   
        name:"Dell" , 
        size:"5" , 
    },
    
]
   

  return (
    <Box>
        <Box style={{display:"" ,border:"1px solid black" , width:"90%" , margin:"auto" , height:"200px" , flexDirection:"column" ,justifyContent:"flex-start" , textAlign:"left"}}>
        <Text fontSize='17px' fontWeight="500" mb={3} color="#1d252c">Brand</Text> 
         
         {/* Checkboxes are here  */}
           
        { filterNameData.map((item)=>{
             <Checkbox><Text fontSize='17px' fontWeight="400" color="#1d252c">Microsoft <span>(34)</span></Text></Checkbox>
        })}

       

         <Checkbox><Text fontSize='17px' fontWeight="400" color="#1d252c">Microsoft <span>(34)</span></Text></Checkbox>

         <Checkbox><Text fontSize='17px' fontWeight="400" color="#1d252c">Microsoft <span>(34)</span></Text></Checkbox>

         <Checkbox><Text fontSize='17px' fontWeight="400" color="#1d252c">Microsoft <span>(34)</span></Text></Checkbox>


  
        </Box>
      
    </Box>
  )
}

export  {Filter}
