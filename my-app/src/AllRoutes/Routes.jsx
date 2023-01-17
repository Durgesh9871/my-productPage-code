import {Routes , Route} from "react-router-dom" 
import React from 'react'
import { ProductPage } from "../Pages/ProductPage"
import { HomePage } from "../Pages/homePage"
import { SinglePageProduct } from "../Pages/SinglePageProduct"

const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mens" element={<ProductPage />}></Route>
        <Route path="/mens/:id" element={<SinglePageProduct />}></Route>
        <Route path="/SinglePage" element={<SinglePageProduct />}></Route>
      </Routes>

    </div>
  )
}

export  {AllRoutes}


