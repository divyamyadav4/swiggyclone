import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./Component/Home";
import Resaurant from "./Component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";

function Swiggy() 
{
    return(
        <>  
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/restaurant" element={<Resaurant></Resaurant>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    ) 
}
ReactDOM.createRoot(document.getElementById("swiggy")).render(<Swiggy></Swiggy>)