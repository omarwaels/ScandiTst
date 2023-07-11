import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./card";
function Products() {

    const [products , setProducts] = useState([]);

    useEffect(()=> {getproducts();},[]);

    function getproducts(){
        
        axios.get("http://localhost/scandiTest/server/").then(function(response){
            console.log(response.data);
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
            <ProductCard product= {product}/>
                    )}
        

        </div>
        

    </div>

  );
  
}

export default Products;