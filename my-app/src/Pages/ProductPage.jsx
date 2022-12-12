import React from 'react' 
import "./ProductPage.css"
import {Box} from "@chakra-ui/react" 
import { ProductHeadings } from '../Components/ProductHeadings' 
import { AllProductPages } from '../Components/AllProductPages'

const ProductPage = () => {

  let ProductPagesData = [
    {id:"1" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=640;maxWidth=550" , 
    text:"Laptop" , 
    check:"" , 
    },
    {id:"2" ,
    src:"https://m.media-amazon.com/images/I/71Q0E2DYf2L._AC_SL1500_.jpg" , 
    text:"Mobiles" , 
    check:"" , 
    },
    {id:"3" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501916_sd.jpg;maxHeight=640;maxWidth=550" , 
    text:" Tv & Projector" ,
    check:"" ,  
    },
    {id:"4" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_5721600-mackbook-air-mmt-404395-0419-der-214532.jpg;maxHeight=302;maxWidth=504" , 
    text:"Major Appliance" , 
    check:"" , 
    },
    {id:"5" ,
    src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426002_sd.jpg" , 
    text:"Watch" , 
    check:"" , 
  }

  ]


  return (
    <Box>
   <hr className='horizatalRule'/> 
   
   <Box style={{width:"92%" , border:"2px  red" , margin:"auto"}}>
   <ProductHeadings productPageName="Laptops" anotherPage="Laptop & Computer Deals" />
   
   <div id="productFilterFish" style={{display:"flex" }}>
         {
          ProductPagesData.map((item)=>{
            return (
              <AllProductPages key={item.id} src={item.src} text={item.text} check={item.check}/>
            )
          })
         }
        </div>
        <hr className='horizatalRule1'/>
    {/* All code same   ----------------Product all pages above  */}
    
    </Box>
   
    </Box>
  )
}

export   {ProductPage}
