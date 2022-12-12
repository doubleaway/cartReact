import React, { useState } from "react";
import List from "../Components/List";
import { AiFillHome,AiOutlineShopping } from "react-icons/ai";
import CartList from "../Components/cartList";
import CartListItem from "../Components/cartList";

const ShoppingBasket=({selectCount,onCounter,onDelete,price})=>{

 

    const deleteOrder=(id)=>{
        onDelete(id);
    }

    let allPrice=price>100000?'free':'5,000';
    let totalPrice=price>100000?price:price+5000
    return (
        <>
        <section className="shopping_cart">
            <div>
                <h1 className="cart_title"><AiOutlineShopping/> Your Cart</h1>
                <hr/>
                <article className="shopping_list_box">
                    <ul className="shopping_list list_category">
                        <li>Title</li>
                        <li>Color</li>
                        <li>Size</li>
                        <li>Count</li>
                    </ul>

                  
                    {
                   selectCount.data_con.length>1?selectCount.data_con.map(data=>data.id==1000||data.id===0?'':<CartListItem deleteOrder={deleteOrder} onCounter={onCounter} data={data} id={data.id} key={data.id} />):<ul className="shopping_list"><li className="cart_default">{selectCount.default}</li></ul>
                   }
            
                 

                 
                </article>
                <article className="shopping_result_box">
                    <h1>Order Summary</h1>
                    <ul>
                        <li>
                            <span>Price</span>
                            <span>{price==0?"0":price.toLocaleString('ko-KR')}</span>
                        </li>
                        <li>
                            <span>Shopping</span>
                            <span>{price==0?"0":allPrice}</span>
                        </li>
            
                    </ul>
                    <ul className="total_box">
                        <li><h1>Total</h1></li>
                        <li><h1>{price==0?"0":totalPrice.toLocaleString('ko-KR')}</h1></li>
                    </ul>
                </article>
            </div>
        </section>
        </>
    )
}


export default ShoppingBasket;