import "./ProductHeadings.css"
import {ChevronRightIcon } from "@chakra-ui/icons" 
import { Text , Image, Heading} from "@chakra-ui/react" 
import { Link } from "react-router-dom" ;
import { Box } from "@chakra-ui/react";

const ProductHeadings = ({productPageName ,anotherPage}) => {
  console.log("hello world")
    return (
      <div> 
        <div className="productNavigationBar">
          <Text fontSize='15px' className="HomeHover" fontWeight="600" >Best Buy</Text>
            <ChevronRightIcon w={16} h={16} color="grey" /> 
            <Text fontSize='15px' color="#585858" fontWeight="500">{productPageName}</Text>
          </div>
          <Box style={{display:"flex"}}>
          <Heading fontSize='20px' fontWeight="600" color="#1d252c" mt={-5} >{anotherPage}</Heading>

          </Box>
          
          {/* <hr className="horizontalRule" /> */}
       
          
      </div>
    )
  }
  
  export  {ProductHeadings}