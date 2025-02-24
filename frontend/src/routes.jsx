import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product"
import Login from "./pages/Login"

function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/product" element={<Product/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes