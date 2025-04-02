import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Billing from "./Pages/Billing.jsx";
import Transaction from "./Pages/Transaction.jsx";



const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
        <Route path='/' element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/bills" element={<Transaction />} />

        </>
        
    ))   



  return (
    <RouterProvider router={router} />
  )
};

export default App