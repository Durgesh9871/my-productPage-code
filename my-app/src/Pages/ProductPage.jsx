import React from 'react' 
import "./ProductPage.css"
import {Box} from "@chakra-ui/react" 
import { ProductHeadings } from '../Components/ProductHeadings' 
import { AllProductPages, ResponsiveAllProductPages } from '../Components/AllProductPages'
import { Sorting } from '../Components/Sorting'






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
   
   <div id="productAllPagesLink" style={{display:"flex" , justifyContent:"space-between" }}>
    <div id='allPagesLink' >
         {
          ProductPagesData.map((item)=>{
            return (
              <AllProductPages key={item.id} src={item.src} text={item.text} check={item.check} />
            )
          })
         }
   </div>

   <div id="ResponsiveAllProductPages">
          <ResponsiveAllProductPages  data={ProductPagesData}  />
    </div>


{/*  Sorting menu bar -------------------------------------------------- */}
    <Sorting />
   
</div>
        <hr className='horizatalRule1'/>
    </Box>
    {/* All code same   ----------------Product all pages above  */}  

    
    {/*  Filtering and display data starts here ----------------------------------------------- */}
    
     <Box id='filterMainBox_&_DisplayData' style={{border:"1px solid red" ,width:"92%" , margin:"auto" , height:"200vh" , display:"flex" , justifyContent:"space-between" }}>
       
       <Box id='FilterMainBox' style={{border:"1px solid green" , height:"100vh" , width:"23%" ,   }}>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nisi sit dicta, deserunt doloribus adipisci, quaerat sint dignissimos inventore repellendus ducimus laudantium laborum veritatis non tempore provident. Nisi minima natus, a mollitia soluta et ipsa autem vel reprehenderit enim dolores voluptatibus nesciunt incidunt perspiciatis molestias odit, animi assumenda facere cum corporis maiores. Minus eum accusamus iste quidem voluptas quas officia ad perferendis molestias, reprehenderit accusantium explicabo tempora facere temporibus, rem adipisci ipsum aliquid dicta quibusdam repellendus! Et eligendi perspiciatis accusantium doloribus itaque, aperiam voluptate tenetur error aut exercitationem consequatur praesentium dolorem. Exercitationem officia a sunt expedita odit repudiandae velit architecto minus ab voluptatibus dicta quibusdam consequatur enim, quia fugiat minima asperiores soluta cupiditate necessitatibus quo laudantium? Ratione, fugit ab. Non porro consectetur ipsum nostrum veritatis dicta ea sunt quaerat odit delectus asperiores error provident ipsam, quod rerum obcaecati dolor, explicabo voluptatum dignissimos tempora deleniti hic quas saepe ad! Asperiores, excepturi. Libero repudiandae eius, quam minus, dolor corrupti ex aliquid itaque necessitatibus ratione dolores animi veritatis officiis pariatur error adipisci reprehenderit? Enim esse maxime alias voluptatem magni molestiae sunt explicabo praesentium adipisci necessitatibus quam vero fugiat nulla distinctio optio cumque voluptatum culpa, obcaecati possimus deleniti minus itaque odit. Esse, aperiam. Consectetur atque nesciunt sapiente nemo. A ratione quam laborum autem nihil earum esse suscipit. Ullam quo corporis cupiditate. Doloribus corporis harum accusantium omnis consectetur in nulla quo, fugit natus deserunt adipisci exercitationem! Illum perspiciatis quia odio illo! Vel quae quod officiis aperiam ipsam magni suscipit, corrupti nemo nulla aspernatur dolor accusamus iste praesentium ea quidem, doloremque, ratione nesciunt? Alias aperiam, perferendis quis, quidem asperiores deleniti commodi eligendi assumenda inventore, maiores accusantium. Repellat odio aspernatur alias. Nostrum vel, sequi vero accusamus neque veritatis quaerat nesciunt placeat numquam nihil dolorem esse reprehenderit aspernatur nulla eligendi repellendus explicabo, voluptates voluptatem corporis voluptas! Reprehenderit ratione, iusto velit repellat quo delectus sint. Omnis, eaque quidem eligendi voluptatibus ipsa dolores tenetur perspiciatis debitis unde assumenda adipisci sequi beatae consequuntur amet quas, delectus, ea blanditiis ex minus corrupti. Blanditiis numquam commodi itaque assumenda earum quibusdam soluta tenetur maiores enim eum totam perspiciatis, sed, laborum quisquam voluptate, recusandae voluptatem incidunt est natus sequi eveniet rerum reprehenderit rem odio? Sunt nulla exercitationem impedit praesentium maxime, beatae nostrum perferendis porro, est possimus dolorem commodi et doloremque explicabo nobis excepturi, neque velit ipsa tempore corrupti vitae! Neque iste illo deserunt delectus totam! Deserunt saepe praesentium fugit est impedit ab eaque, officiis nesciunt hic pariatur voluptates sequi nam labore veniam perferendis qui quod eveniet explicabo magnam! Inventore minima consequuntur ut eligendi dolor dolore voluptatibus sapiente illum rem pariatur molestiae exercitationem nisi quasi optio, tenetur quo mollitia quos eveniet quia. Esse aliquam repudiandae ratione dolores vel officiis facilis, minima autem quos quam omnis deleniti magni, dignissimos nobis quaerat earum? Officia, minima, reiciendis magnam voluptatibus consequuntur laudantium beatae ducimus adipisci quod excepturi incidunt ab neque quam suscipit perferendis quis ipsam ratione possimus, quae delectus maiores quia fuga! Labore explicabo accusamus quas voluptatem ipsum architecto quae, laborum pariatur incidunt dolorem ut eaque perferendis sapiente delectus repellat!
       </Box>
       <Box id='DisplayDataBox' style={{border:"1px solid green" , height:"200vh" , width:"75%" , overflow:"scroll" , }} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vitae natus! Amet reprehenderit nemo dolor consectetur dolores vitae cupiditate, excepturi quam voluptate est, praesentium laborum voluptatem? Saepe numquam nobis harum ad necessitatibus culpa, recusandae laudantium, delectus fuga similique quam sequi assumenda! Impedit dolor illum excepturi, velit quaerat nulla aliquid expedita? Dolore enim veniam inventore eum quas est quasi, aliquid delectus in reiciendis saepe doloribus eos ab consequatur neque velit rem dolores harum exercitationem atque perferendis earum unde? Delectus, numquam ab dicta rem, adipisci quibusdam quisquam ratione consequatur quos aut sapiente ad itaque velit, dolorem vitae magnam dolor odio! Animi, aspernatur iste. Aut praesentium dicta facere tempore quod aliquid libero quidem, temporibus veritatis, recusandae maiores nostrum! Nisi, eum tempore! Autem quidem cupiditate minima qui impedit officia ea. Consectetur dolores tenetur mollitia repudiandae distinctio quos ex suscipit, magnam nihil iusto! Quisquam praesentium, laboriosam libero consectetur alias ratione soluta qui, accusantium a facilis quidem repudiandae, sapiente ab. Nostrum ad laboriosam ea suscipit quibusdam laudantium error deleniti veritatis maiores ipsum, eligendi, et molestiae numquam unde rerum iusto eos! Ipsam voluptatum ipsa ullam labore veniam, eaque cupiditate laborum voluptate corrupti sapiente. Dolores iure consequatur quibusdam nobis voluptatem possimus. A illum dolore numquam, vitae, ex nobis eius aliquid, possimus in sequi perspiciatis voluptate! Id, consequuntur, nostrum in eos atque perferendis asperiores ducimus amet similique quod officiis pariatur necessitatibus velit enim et suscipit exercitationem harum. Voluptatem ducimus voluptate veritatis quo voluptatum ut molestias adipisci quia. Delectus earum natus ab adipisci quod doloribus sunt nobis unde cumque alias saepe error eos quaerat excepturi iusto, odit sint ipsam fugit hic dolor asperiores deserunt assumenda, fuga dicta? Voluptatum, illum? Itaque eligendi illo unde? Officia quis placeat facere nam! Quaerat accusamus et facere aspernatur, quam, eos nostrum obcaecati voluptate minus delectus, vero quis mollitia repudiandae corrupti aut ipsum nihil necessitatibus enim iure molestiae asperiores velit! Recusandae impedit porro dignissimos error voluptatum earum adipisci vel officia repellat amet numquam, nam reprehenderit ratione! Quod sapiente placeat unde, ducimus necessitatibus in ipsum ad nobis optio praesentium, animi, maiores pariatur explicabo! Commodi, aut? Perferendis neque eaque porro ipsam aspernatur laudantium ea obcaecati voluptates voluptatem ad eius at voluptate, dignissimos officiis magnam, nostrum sit alias! Aut sequi in neque fugit, quas, at nobis ea impedit exercitationem aspernatur eum corrupti, nihil dolor perferendis atque commodi! Quidem eaque nam incidunt eos suscipit ea assumenda recusandae, repellendus amet excepturi tempora nulla, delectus sequi ex minus dolorem, enim magnam cupiditate dignissimos consequuntur eius officia. Assumenda voluptatem eius esse veritatis tenetur exercitationem odit incidunt sit, distinctio optio eveniet officia rem voluptatum tempore quis fuga expedita aliquid corrupti repellat quia nisi delectus veniam porro. Non soluta molestiae ratione odit ab qui deleniti quas consequatur quod eum pariatur, omnis nesciunt perferendis eaque at eligendi hic. Possimus nostrum numquam culpa quidem veniam necessitatibus dolores libero minus, quo eaque in quia dicta optio ad! Nulla qui ipsa neque, laborum tempore unde. Amet repellat culpa praesentium accusamus quidem asperiores accusantium, veniam necessitatibus nostrum! Natus totam non dolore veritatis labore! Amet hic ex dignissimos eum minus at iste, commodi magnam omnis eius aliquid aperiam voluptate illum, animi sequi! Reiciendis quas iusto libero corrupti dolore nobis, quis debitis, dolorem ad nemo architecto possimus quod illum! Tenetur est perferendis nihil necessitatibus ad, sunt eos temporibus accusamus incidunt quam culpa mollitia iure debitis itaque dignissimos doloribus quae harum nisi laboriosam minima, quidem unde velit. Aut perspiciatis corrupti dolorem! Doloremque in ullam ipsum nobis similique distinctio iste vel cumque excepturi corrupti, repudiandae consequuntur ex laborum reiciendis sunt laudantium delectus magni, blanditiis maxime possimus voluptatem eum nisi libero. Veniam dolore sequi officia cumque omnis distinctio. Sapiente delectus cupiditate minus, vero culpa dolores!
       </Box>

     </Box>

    
   
    </Box>
  )
}

export   {ProductPage}
