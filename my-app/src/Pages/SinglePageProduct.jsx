import { Box } from '@chakra-ui/react'
import React,{useState , useEffect} from 'react'  
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ImageData } from '../ComponentsSinglePage/ImageData' 
import { ProductLaptop } from '../ComponentsSinglePage/ProductLaptop' 
import "./SinglePageProduct.css"


const SinglePageProduct = () => {
  const {id} = useParams()   
  const [singleData , updateSingleData] = useState([])
   
  const GetSinglePageData = (num) =>{
    axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/Laptop/${num}`)
    .then((res)=> updateSingleData(res.data))
    
}
  
useEffect(()=>{
  GetSinglePageData(id)
},[id])  
     
     

        // console.log(singleData)
     

  return (
    <Box className="SingleProductMainDiv" background="#f1f3f6"  style={{border:"2px  green" , height:"200vh" ,}}>
        {/* <hr className='horizatalRule' style={{marginBottom: "10px"}} /> */}
        {/* <br /> */}
        {/*  Main Box of Single Page ------------------------------------------------ */}
        <Box className='SingleProductMain' flexDirection={{base:"row", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} shadow="2xl"  mt="10px" background='#ffffff' style={{border:"1px solid red" , height:"200vh"  , width:"90%" , margin:"auto" , display:"flex" ,justifyContent:"space-between"}}>

        {/* Image Data Main box ---------------------------------------------------- */}
        <Box className='SingleProductMainImage' mt={5}  width={{base:"none", sm: "62vw", md: "50vw", lg: "42vw",xl: "40vw",'2xl': "40vw"}} style={{border:"1px solid  yellow" , height:"auto"}}>
        <ImageData  allImageData={singleData?.Images && singleData?.Images[0].imageFront} image={singleData?.Images} />
        </Box>

        {/* Single Page Info Main Div ----------------------------------------------------- */}
        <Box className='SingleProductMainData' mt={5}  width={{base:"none", sm: "100%", md: "50vw", lg: "53vw",xl: "55vw",'2xl': "55vw"}} style={{border:"1px solid  grey" ,height:"200vh"}}>
         <ProductLaptop item={singleData} />
        </Box>
        </Box>
        

    </Box>
  )
}

export  {SinglePageProduct}
