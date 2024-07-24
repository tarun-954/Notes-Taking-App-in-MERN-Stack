import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Loader from "../components/shared/loader";
import Login from "../pages/login";
 function App(){
    return (
       
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        
            </BrowserRouter>

      
    );
 }
 export default App;