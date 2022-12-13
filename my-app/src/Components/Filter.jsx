import { Box , Checkbox, Text } from '@chakra-ui/react'
import React from 'react' 
import { Modalfilter } from './Modalfilter'

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
        <Box style={{display:"" ,border:"1px  black" , width:"90%" , margin:"auto" , height:"200px"  , textAlign:"left"}}>
        <Text fontSize='17px' fontWeight="500" mb={4} mt={3} color="#1d252c">Brand</Text> 
         
         {/* Checkboxes are here  */}
           <Box style={{display:"flex" , flexDirection:"column"}}>
        { filterNameData.map((item)=>{
             return (
             <Checkbox key={item.id} ><Text fontSize='17px' fontWeight="400" color="#1d252c">{item.name} <span>({item.size})</span></Text></Checkbox> )
        })}

        <Modalfilter/>
        </Box>
       

        


  
        </Box>
      
    </Box>
  )
}

export  {Filter}
