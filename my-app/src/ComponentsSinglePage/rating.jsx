import React,{useState} from 'react' 
import { Box, Heading , Text,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import "./recent.css"

const Rating = () => {
  
  

  const getData = [
    {  
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/w/g/n/36-rjo0086-red-tape-original-imaghxbg9hu5vdqu.jpeg?q=70" 
    } ,
    {
    "mainImage":"https://rukminim1.flixcart.com/image/832/832/l0igvww0/shoe/j/x/z/7-brd-678-7-birde-blue-original-imagca7bcj6p99gw.jpeg?q=70"
    } ,
    { 
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/p/c/5/-original-imaghrbyty4ggzcb.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=70"
    } ,
    {
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/h/9/10-rso246-red-tape-grey-original-imagk5jyfezgkvqm.jpeg?q=70"
    } ,
    {  
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/w/g/n/36-rjo0086-red-tape-original-imaghxbg9hu5vdqu.jpeg?q=70" 
      } ,
      {
      "mainImage":"https://rukminim1.flixcart.com/image/832/832/l0igvww0/shoe/j/x/z/7-brd-678-7-birde-blue-original-imagca7bcj6p99gw.jpeg?q=70"
      } ,
      { 
      
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/p/c/5/-original-imaghrbyty4ggzcb.jpeg?q=70"
      } ,
      {
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=70"
      } ,
      {
        mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/h/9/10-rso246-red-tape-grey-original-imagk5jyfezgkvqm.jpeg?q=70"
      } ,
  ]

  return (
    <Box>
      <Box><u><Heading fontWeight={600}>Customer Rating & Reviews</Heading></u></Box>
        
        {/*  Rating line -------------show rating -------------- */}
    
        <Box mt="24px" style={{display:"flex" , alignItems:"center"}} >
       <Heading  fontWeight={500} fontSize="22px" mr="30px" ml="20px" lineHeight="20px"  >Rating and reviews</Heading>
{/*  rating and review logo -------------------------------- */}
<Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
<Text color="#ffffff" fontSize="16px">4</Text> 
<StarIcon fontSize="13px" color="#ffffff" />
</Box>  

{/*  rating and reviews text ------------------- */}
<Box color="#8f8a8f" ><Text lineHeight="20px" fontWeight="600" fontSize="17px" ml="6px">4 ratings and 2 reviews</Text></Box>
</Box>

{/*  Rating is ended here -------------------------------------- */}

{/*  IMAGES UPLOADED BY OUR CUSTOMERS ---------------------------------------- */}
   <Box>
    <Text textAlign="left" ml="20px">Images upload by our customers</Text>
    {/* Images of customer products-------------------------- */}
    <Box display="flex" justifyContent="flex-start" ml="20px"  >
     {getData.length > 0 && getData?.map((item ,i)=>{
      if(i < 4){
        return (
          <Box  key={i} textAlign="left" border="2px  red" ml="5px">
          <Image src={item.mainImage} alt={item.categories} boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
          </Box>
        )
      }
     

     })}
     </Box>

   </Box>



    </Box>
  )
}

export  {Rating}
