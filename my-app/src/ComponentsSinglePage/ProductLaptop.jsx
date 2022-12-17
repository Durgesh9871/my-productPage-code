import { AddIcon, MinusIcon, StarIcon } from '@chakra-ui/icons'
import { Box ,Text , Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, TableContainer} from '@chakra-ui/react'
import React from 'react'
import "./ImageData.css"


const ProductLaptop = ({item}) => {
  console.log('item' , item)

  const total = Math.floor(+(item.realPrice) * 100 )
  const spend = Math.floor(+(item.price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 


  return (
    <Box padding="10px" textAlign="left">
        {/*  Main Heading ------------------------------------ */}
     <Heading fontSize="18px" fontWeight="500" color="#8f8a8f" >{item.brand}</Heading> 
     <Text fontSize='16px' fontWeight="500" color="#303030" mt="8px" lineHeight="23px" >{item.title}</Text> 

     <Text fontSize="15px" color="#26a541" fontWeight="500" mt="12px">Special price</Text>
        

        {/*  Price is all here ------------------------------------------- */}
     <Box  mt="6px" style={{display:'flex' , alignItems:"center" } }>
          <Heading fontSize='28px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${item.price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#8f8a8f" textAlign="left">${item.realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#26a541" textAlign="left">{ans}% off</Text>
          </Box>



      {/*  Rating -------------------------------------------------------- */}
        <Box mt="4px" style={{display:"flex" , alignItems:"center"}} >

        {/*  rating and review logo -------------------------------- */}
        <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
        style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
        <Text color="#ffffff" fontSize="16px">{item.rating}</Text> 
        <StarIcon fontSize="13px" color="#ffffff" />
        </Box>  

        {/*  rating and reviews text ------------------- */}
        <Box color="#8f8a8f" ><Text fontWeight="600" fontSize="17px" ml="6px">{item.rating} ratings and 2 reviews</Text></Box>
        
        </Box>

       {/*  Product description code is here ----------------------------- */}


       <Accordion allowMultiple mt="36px">
  <AccordionItem className='changeColor'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Text fontWeight="500" fontSize="20px" pt="12px" pb="12px" pr="24px" > Description</Text> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {item.description}
    </AccordionPanel>
  </AccordionItem>
  
   
   {/*   Second drop down ----------------------------------------------- */}
  <AccordionItem className='changeColor'>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            <Text fontWeight="500" fontSize="20px" pt="12px" pb="12px" pr="24px" >Product Details</Text> 
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <TableContainer>
  <Table variant='simple' border="none">
  
    <Tbody>
      <Tr>
        <Td>Brand</Td>
        <Td>{item.brand}</Td>
        
      </Tr>
      <Tr>
        <Td>Color</Td>
        <Td>{item.color}</Td>
       
      </Tr>
      <Tr>
        <Td>MRP</Td>
        <Td>${item.realPrice}</Td>
        
      </Tr>
      <Tr>
        <Td>Save</Td>
        <Td>{ans}%</Td>
        
      </Tr>
      <Tr>
        <Td>Pay</Td>
        <Td>${item.price}</Td>
        
      </Tr>
     

    </Tbody>
   
  </Table>
</TableContainer>
        </AccordionPanel>
      </>
    )}
  </AccordionItem> 


</Accordion>











    </Box>
 
     



  )
}

export  {ProductLaptop}
