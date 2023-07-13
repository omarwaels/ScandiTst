import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./card";
import RemoveitemContext from '../Productcontext';
import { useContext } from 'react';

import {RemoveContext} from '../Productcontext';
function Products() {
  
  let {productsSkuOnDisplay} = useContext(RemoveContext);
  let {updateProductState} = useContext(RemoveContext);
 

  // function handlecheckbutton(productSku){
  //   if(removeProductsArr.includes(productSku)){
  //     const index = removeProductsArr.indexOf(productSku);
  //     removeProductsArr.splice(index, productSku);
  //   }else{
  //     removeProductsArr.push(productSku);
  //   }

  //   console.log(removeProductsArr);
  // }

    const [products , setProducts] = useState([]);

    useEffect(()=> {getproducts() },[updateProductState]);

    function getproducts(){
        
        axios.get("http://localhost/scandiTest/server/").then(function(response){
            
            setProducts(response.data);
        });
    }
    // const listProducts = products.map((product,key) =>
    // <ProductCard product= {product}/>
    // );
        
  return (



    <div className="container  ">
        <div className="row" > 

        {products.map((product, key) =>
        
            <ProductCard product= {product} />
                    )}
        

        </div>
        

    </div>

  );
  
}

export default Products;