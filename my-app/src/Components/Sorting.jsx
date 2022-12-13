import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react" ;
import { ChevronDownIcon } from '@chakra-ui/icons'


const Sorting = () => {
    
  return (
    <div>
       <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Sort by Price' : 'Sort by Price'}
      </MenuButton>
      <MenuList>
        <MenuItem>All</MenuItem>
        <MenuItem>Price Low to High</MenuItem>
        <MenuItem>Price High to Low</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </div>
  )
}

export  {Sorting}
