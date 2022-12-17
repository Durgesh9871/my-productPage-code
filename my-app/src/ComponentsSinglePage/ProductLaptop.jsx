import { AddIcon, MinusIcon, StarIcon } from '@chakra-ui/icons'
import { Box ,Text , Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, TableContainer} from '@chakra-ui/react'
import React from 'react'
import "./ImageData.css"


const ProductLaptop = () => {
  return (
    <Box padding="10px" textAlign="left">
        {/*  Main Heading ------------------------------------ */}
     <Heading fontSize="18px" fontWeight="500" color="#8f8a8f" >Microsoft</Heading> 
     <Text fontSize='16px' fontWeight="500" color="#303030" mt="8px" lineHeight="23px" >HP - 15.6' Touch-Screen - Laptop - Intel Core i5 - 12GB Memory - 256GB SSD - Natural Silver 12GB Memory - 256GB SSD - Natural Silver 12GB Memory - 256GB SSD - Natural Silver 12GB Memory - 256GB SSD - Natural Silver</Text> 

     <Text fontSize="15px" color="#26a541" fontWeight="500" mt="12px">Special price</Text>
        

        {/*  Price is all here ------------------------------------------- */}
     <Box  mt="6px" style={{display:'flex' , alignItems:"center" } }>
          <Heading fontSize='28px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">$200</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#8f8a8f" textAlign="left">$300</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#26a541" textAlign="left">30% off</Text>
          </Box>



      {/*  Rating -------------------------------------------------------- */}
        <Box mt="4px" style={{display:"flex" , alignItems:"center"}} >

        {/*  rating and review logo -------------------------------- */}
        <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
        style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
        <Text color="#ffffff" fontSize="16px">4</Text> 
        <StarIcon fontSize="13px" color="#ffffff" />
        </Box>  

        {/*  rating and reviews text ------------------- */}
        <Box color="#8f8a8f" ><Text fontWeight="600" fontSize="17px" ml="6px">4 ratings and 2 reviews</Text></Box>
        
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  
   
   {/*   Second drop down ----------------------------------------------- */}
  <AccordionItem className='changeColor'>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            <Text fontWeight="500" fontSize="22px" pt="12px" pb="12px" pr="24px" >Product Details</Text> 
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
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
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
