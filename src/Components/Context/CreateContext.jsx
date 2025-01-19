import { createContext, useContext, useState } from "react";


const createContext = createContext()

export const useCart = () => {
 return useContext(createContext)
}

export  const  CartProvider = ((children)=> {
  const [blogDetail, setBlogDetail]= useState(null)


  const BlogData = (item) => {
    setBlogDetail(item)
  }

  return (
    <Context.Provider value = {{blogDetail, BlogData}}>
        {children}
    </Context.Provider>
  )
})