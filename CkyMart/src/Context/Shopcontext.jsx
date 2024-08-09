import React, { createContext, useState } from "react";
import all_product from "../Components/Images/all_product";
export const Shopcontext = createContext(0);
let cart = {};
const getcart = () => {
        for (let index = 0; index < all_product.length; index++)
                cart[index] = 0;
        return cart;
}

const Shopcontextprovider = (props) => {

        const [cartitem, setcartitem] = useState(getcart());
        const addcart = (itemid) => {
                setcartitem((prev) => (
                        { ...prev, [itemid]: prev[itemid] + 1 }
                ))
                // console.log(cartitem);
        }
        const deletecart = (itemid) => {
                setcartitem((prev) => (
                        { ...prev, [itemid]: prev[itemid] - 1 }
                ))
                // console.log(cartitem);
        }
        
const gettotalitems=()=>{
        let ttlitem=0;
     for(let inde=0;inde<all_product.length;inde++){
        if(cartitem[inde]>0)
                ttlitem+=cartitem[inde];
     }
//      console.log(ttlitem,"hi");
     return ttlitem;
}
        const contextvalue = { all_product, cartitem, addcart, deletecart,gettotalitems };
        return (<Shopcontext.Provider value={contextvalue}>
                {props.children}
        </Shopcontext.Provider>)
}
export default Shopcontextprovider;