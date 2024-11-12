import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from "../layout/Mainlayout"
import TravelScope from "../modules/destinations/TravelScope"
import ScrollDown from "../modules/scrolldown/ScrollDown"
import Explore from "../modules/explore/Explore"





const route = createBrowserRouter([
    {
        path: '',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <ScrollDown />, 
            },
            {
                path: '/travel-scope',
                element: <TravelScope /> 
            },
            {
                path:'/explore',
                element:<Explore/>
            }

        ]
    }



])

export default route