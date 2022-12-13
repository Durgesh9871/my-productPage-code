import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure ,Text, Box } from '@chakra-ui/react'
import React from 'react'

const Modalfilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
      {/* function BasicUsage() { */}
 
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, cumque! Eum, nihil rem? Aut asperiores ducimus aspernatur fugit, accusantium repellat?</p>
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
