import React from "react";
import { Route, Routes } from "react-router-dom";
import ListContainer from "../Conatiners/ListContainer";
// import OrderContainer from "../Conatiners/OrderContainer";
import Test2 from "./Cart";



const Home=()=>{

    return(
        <Routes>
            <Route path='/'  exact  element={<ListContainer/>} />
       {/* <Route path='/cart' element={<OrderContainer/>} /> */}
    
   </Routes>
    )
}

export default Home;