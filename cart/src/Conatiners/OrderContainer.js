import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../Components/List";
import {add,remove,counterChange} from "../Modules/cart";
import ShoppingBasket from "../Page/ShoppingBasket";

const OrderContainer=()=> {
const selectCont=useSelector(state=>state.cart);
const dispatch=useDispatch();
const onDelete=useCallback((id)=>dispatch(remove(id)),[dispatch]);
const onCounter=useCallback((id,counter)=>dispatch(counterChange(id,counter)),[dispatch]);
    return(
        <>
        {selectCont.data_con.map(m=><div>{m.id}</div>)}
    <ShoppingBasket selectCount={selectCont} onCounter={onCounter} onDelete={onDelete}/>
    </>
    )
}

export default OrderContainer;