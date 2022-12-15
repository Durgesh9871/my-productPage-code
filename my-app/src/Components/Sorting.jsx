import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react" ;
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState ,useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';



const Sorting = () => {
  const [searchParams , setSearchParams] = useSearchParams()
    const [changeText , setChangeText] = useState("Sort by Price")
    const [sort , setSort ] = useState(searchParams.getAll("sort")[0] || "")
  
   
    const handleSort = (e)=>{
      setSort(e.target.value)
  }
   
  useEffect(()=>{
    let params = {} 
     params.sort = sort 
    // sort &&  (params.sort = sort )
     setSearchParams(params) 
    


  },[setSearchParams ,sort])
    
  return (
    <div>
       <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} color="#585858" width={{base:"138px", sm: "140px", md: "140px", lg: "140px",xl: "140px",'2xl': "140px",}} >
        {isOpen ? 'Sort by Price' : changeText}
      </MenuButton>
      <MenuList>
        <MenuItem  onClick={()=>setChangeText("Sort by Price")}>All</MenuItem>
        <MenuItem  value="asc"  name="sortBy"  onClick={handleSort}>Price Low to High</MenuItem>
        <MenuItem value="desc"  name="sortBy"  onClick={handleSort}>Price High to Low</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </div>
  )
}

export  {Sorting}
