import React from 'react' ;  
import "./ProductHeadings.css"
 
import { Text,Image } from '@chakra-ui/react';

const AllProductPages = ({ src , text , check}) => {
    let style = {
        display:"flex" , 
        alignItems: "center" , 
        cursor:"pointer" ,
        marginRight:"30px" , 
       color:"#4B4F54" , 
       width: "auto" , 
    //    height: "100%"  , 
        //   border: "2px  red" , 
      }

  return (
    <div style={style} className="AllProductPages">
        <Image
  
  boxSize='32px'
  src={src}
  alt='Diffrent Pages'/>
  <Text fontWeight={600} fontSize="15px" ml="6px">{text}</Text>
  
    </div>
  )
}

export  {AllProductPages}
