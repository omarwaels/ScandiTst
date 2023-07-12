import { createContext,useState,React, Children } from "react";
import ProductCard from "./components/card";
import Products from './components/products';
import axios from "axios";
export const RemoveContext = createContext();




function RemoveContextProvider({children}){

    let productsSkuOnDisplay = [] ;
    axios.get("http://localhost/scandiTest/server/").then(function(response){
        let products =response.data;
    products.map((product, key) =>
    productsSkuOnDisplay.push(product.SKU)
            )
    });
    console.log(productsSkuOnDisplay);
    
      let removeProductsArr  = [];
  
    function deleteFromArr(productSku){
    
      const index = productsSkuOnDisplay.indexOf(productSku);
      productsSkuOnDisplay.splice(index, productSku);
    


    
  }

  function handlecheckbutton(productSku){
    if(removeProductsArr.includes(productSku)){
      const index = removeProductsArr.indexOf(productSku);
      removeProductsArr.splice(index, productSku);
    }else{
      removeProductsArr.push(productSku);
    }

    console.log(removeProductsArr);
  }
    return (
        <RemoveContext.Provider value={{removeProductsArr,productsSkuOnDisplay,handlecheckbutton}}>
       {children}
        </RemoveContext.Provider>
    )

}



export default RemoveContextProvider;