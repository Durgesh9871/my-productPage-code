import {Routes , Route} from "react-router-dom" 
import React from 'react'
import { ProductPage } from "../Pages/ProductPage"
import { HomePage } from "../Pages/homePage"

const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productLaptop" element={<ProductPage />}></Route>
      </Routes>

    </div>
  )
}

export  {AllRoutes}


