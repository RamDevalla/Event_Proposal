import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Signing_Components/Home'
import NavBar from '../Headers/NavBar';
import VendorProposals from '../components/Vendor_Components/VendorProposals';
import AllProposals from '../components/User_Components/AllProposals';
import SingleProposal from '../components/User_Components/SingleProposal';


function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element= {<NavBar/>}>
        <Route path='proposals' element = {<AllProposals/>}/>
        <Route path='proposals/:id' element = {<SingleProposal/>}/>
      </Route>
      <Route path='/vendor' element = {<NavBar />}>
        <Route path='proposals' element = {<VendorProposals/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default AppRouter