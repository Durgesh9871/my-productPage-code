import { StarIcon } from '@chakra-ui/icons'
import { Box , Checkbox, Text } from '@chakra-ui/react'
import React from 'react' 
import { Modalfilter } from './Modalfilter' 
import "./ProductHeadings.css" ; 


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

   const filterColorData = [
    {
        id:"1"  ,   
        color:"Silver" , 
        size:"7" , 
    },
    {
        id:"2"  ,   
        color:"Rose Gold" , 
        size:"1" , 
    },
    {
        id:"3"  ,   
        color:"Blue" , 
        size:"2" , 
    },
    {
        id:"4"  ,   
        color:"White" , 
        size:"2" , 
    },
    {
        id:"5"  ,   
        color:"Green" , 
        size:"3" , 
    },
    {
        id:"6"  ,   
        color:"Tan" , 
        size:"2" , 
    },
    {
        id:"7"  ,   
        color:"Black" , 
        size:"3" , 
    },
]  
    
    const filterReviewData = [
        {
            id:1  ,   
            review: 5 , 
            size:5 , 
        },
        {
            id:2  ,   
            review:4 , 
            size:6 , 
        },
        {
            id:3  ,   
            review:3 , 
            size:7 , 
        },
        {
            id:4  ,   
            review:2 , 
            size:2 , 
        },
        {
            id:5  ,   
            review:1 , 
            size:"No Item" , 
        },
        
        
    ]
     



  return (
    <Box>
    <Box className='MainFilterComponent'>
        <Box className='hoverFilterMainBox' style={{display:"" ,border:"1px   black" , width:"90%" , margin:"auto" , height:"auto"  , textAlign:"left"}}>
        <Text fontSize='17px' fontWeight="500" mb={4} mt={3} color="#1d252c">Brand</Text> 
         
         {/* Checkboxes are here ---------depend upon Models ------- */}
           <Box style={{display:"flex" , flexDirection:"column" }} mb={1}>
        {filterNameData.length > 0 &&  filterNameData.map((item)=>{
             return (
             <Checkbox key={item.id} ><Text fontSize='17px' fontWeight="400" color="#1d252c">{item.name} <span>({item.size})</span></Text></Checkbox> )
        })}

        </Box>
        <Modalfilter />
        
            {/* Checkboxes are here ---------depend upon Color- ------- */}
        <hr  style={{marginTop:"3vh"}}/>
        
        <Text fontSize='17px' fontWeight="500" mb={4} mt={3} color="#1d252c">Color</Text> 
            <Box style={{display:"flex" , flexDirection:"column" }} mb={1}>
        {filterColorData.length > 0 &&  filterColorData.map((item)=>{
             return (
             <Checkbox key={item.id} ><Text fontSize='17px' fontWeight="400" color="#1d252c">{item.color} <span>({item.size})</span></Text></Checkbox> )
        })}

        </Box>

          {/* Checkboxes are here ---------depend upon Rating- ------- */}
          <hr  style={{marginTop:"3vh"}}/>
        
        <Text fontSize='17px' fontWeight="500" mb={4} mt={3} color="#1d252c">Rating</Text> 
            <Box style={{display:"flex" , flexDirection:"column" }} mb={1}>
        {filterReviewData.length > 0 &&  filterReviewData.map((item)=>{
             return (
             <Checkbox key={item.id} ><Text fontSize='17px' fontWeight="400" color="#1d252c">
              {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < (item.review) ? 'teal.500' : 'gray.300'}
              />
            ))}
                 
                <span>({item.size})</span></Text></Checkbox> )
        })}
  
  
        </Box>
          



  
        </Box>
    </Box>
      
    </Box>
  )
}

export  {Filter}
