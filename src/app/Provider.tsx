"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
const Providers =  
    ({
        children,
      }:{
        children: React.ReactNode
      }) => {
    return(
        <Provider store={store}>{children}</Provider>
    )
    }

export default Providers

//sab sai layoat ka material copy karo , provider ko import karo aur childer jo kai layoat mai sai hain
//usko provider mai wrap karo and store paas karo phir providers sai children ko wrap karo in layaot .tsx
//provider mai store hai aur layoat mai provider hai 
//jahan per bhee redux lagatay wo client side hona cahiyae