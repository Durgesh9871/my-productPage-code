import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react" ;
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react';


const Sorting = () => {
    const [changeText , setChangeText] = useState("Sort by Price")

  return (
    <div>
       <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} color="#585858" width={{base:"138px", sm: "140px", md: "140px", lg: "140px",xl: "140px",'2xl': "140px",}} >
        {isOpen ? 'Sort by Price' : changeText}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>setChangeText("Sort by Price")}>All</MenuItem>
        <MenuItem onClick={()=>setChangeText("Ascending")}>Price Low to High</MenuItem>
        <MenuItem onClick={()=>setChangeText("Descending")}>Price High to Low</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </div>
  )
}

export  {Sorting}
