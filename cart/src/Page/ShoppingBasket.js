import React from "react";
import List from "../Components/List";
import { AiFillHome,AiOutlineShopping } from "react-icons/ai";
import CartList from "../Components/cartList";
import CartListItem from "../Components/cartList";

const ShoppingBasket=({selectCount,onCounter,onDelete})=>{
    console.log(selectCount.data_con);
    return (
        <>


        <section className="shopping_cart">
            <div>
                <h1 className="cart_title"><AiOutlineShopping/> Your Cart</h1>
                <article className="shopping_list_box">
                    <ul className="shopping_list list_category">
                        <li>Title</li>
                        <li>Color</li>
                        <li>Size</li>
                        <li>Count</li>
                    </ul>
                    <ul className="shopping_list">
                        <li><img src='./img/blackcloth (1).png'/><span>we don't talk bruno nonono</span></li>
                        <li>Black</li>
                        <li>S</li>
                        <li className="count_box">
                            <span>+</span>
                            <span>1</span>
                            <span>-</span>
                        </li>
                        <li><span className="close_btn">X</span></li>
                    </ul>
                    <ul>
                    {
                     selectCount.data_con.map(data=>data.id==0?'':<CartListItem data={data} id={data.id}/>)
                 }

                    </ul>
                </article>
                <article className="shopping_result_box">
                    <h1>Order Summary</h1>
                    <ul>
                        <li>
                            <span>Price</span>
                            <span>$40</span>
                        </li>
                        <li>
                            <span>Shopping</span>
                            <span>free</span>
                        </li>
            
                    </ul>
                    <ul className="total_box">
                        <li><h1>Total</h1></li>
                        <li><h1>$40</h1></li>
                    </ul>
                </article>
            </div>
        </section>
        </>
    )
}


export default ShoppingBasket;