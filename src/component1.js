import * as React from 'react';
import Addcart from './addtocart';
import Header from './headerContent';
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";




export default function Component1(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/cart" element={<Addcart />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}








