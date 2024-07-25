import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import { Toastcontainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from "../components/shared/loader";

import Login from "../pages/login";
import Main from "../layouts/Main";
import Notes from "../pages/notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Main />}>
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
