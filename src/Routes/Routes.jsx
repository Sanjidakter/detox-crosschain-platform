import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Error from '../Shared/Error/Error';

export const router = createBrowserRouter([
   {
    path:"/",
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
   },
   {
    path:'/*',
    element:<Error></Error>
   }
])