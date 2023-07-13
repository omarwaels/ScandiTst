import { createContext,useState,React, Children } from "react";
import ProductCard from "./components/card";
import Products from './components/products';
import axios from "axios";
export const RemoveContext = createContext();




function RemoveContextProvider({children}){
    const [updateProductState , setState] = useState(0);
    let productsSkuOnDisplay = [] ;
    axios.get("http://localhost/scandiTest/server/").then(function(response){
        let products =response.data;
    products.map((product, key) =>
    productsSkuOnDisplay.push(product.SKU)
            )
    });
    console.log(productsSkuOnDisplay);
    
      let removeProductsArr  = [];
  
    function deleteFromArr(allProductSku){
      for (let i = 0; i < allProductSku.length; i++) {
        
        const index = productsSkuOnDisplay.indexOf(allProductSku[i]);
        productsSkuOnDisplay.splice(index, allProductSku[i]);
      }
      if(updateProductState == 0){
        setState(1);
      }else{
        setState(0);
      }
    


    
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
        <RemoveContext.Provider value={{removeProductsArr,productsSkuOnDisplay,handlecheckbutton,deleteFromArr,updateProductState,setState}}>
       {children}
        </RemoveContext.Provider>
    )

}



export default RemoveContextProvider;