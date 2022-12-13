import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure ,Text, Box, Checkbox } from '@chakra-ui/react'
import React from 'react'

const Modalfilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
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
    {
        id:"5"  ,   
        name:"Acer" , 
        size:"Out of stock" , 
    },
    {
        id:"6"  ,   
        name:"Alienware" , 
        size:"Out of stock" , 
    },
    {
        id:"7"  ,   
        name:"AOC" , 
        size:"Out of stock" , 
    },
    {
        id:"8"  ,   
        name:"APC" , 
        size:"Out of stock" , 
    },  {
        id:"9"  ,   
        name:"Apple" , 
        size:"Out of stock" , 
    },
    {
        id:"10"  ,   
        name:"Belkin" , 
        size:"Out of stock" , 
    },
    {
        id:"11"  ,   
        name:"Crucial" , 
        size:"Out of stock" , 
    },
    {
        id:"12"  ,   
        name:"MSI" , 
        size:"Out of stock" , 
    },
    {
        id:"13"  ,   
        name:"Samsung" , 
        size:"Out of stock" , 
    },{
        id:"14"  ,   
        name:"Lenovo" , 
        size:"Out of stock" , 
    },{
        id:"15"  ,   
        name:"Edifier" , 
        size:"Out of stock" , 
    },
] 


 
  return (
    <Box>
      <Text onClick={onOpen} style={{cursor:"pointer"}}>Open Modal</Text>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              You can scroll the content behind the modal
            </Text>
            {/*  here is all text ----------------------------------------------- */}
            <Box style={{display:"flex" , flexDirection:"column"}}>
        { filterNameData.map((item)=>{
             return (
             <Checkbox key={item.id} value={item.name} ><Text fontSize='17px' fontWeight="400" color="#1d252c">{item.name} <span>({item.size})</span></Text></Checkbox> )
        })}

       
        </Box>

            {/* here is text end --------------------------------------------------- */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )

}
    
 


export  {Modalfilter}
