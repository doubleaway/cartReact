import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../Components/List";
import {add,remove,counterChange} from "../Modules/cart";
import Order from "../Page/Order";


const ListContainer=()=>{
    const selectContent=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const onAdd=useCallback((data)=>dispatch(add(data)),[dispatch]);
    const onDelete=useCallback((id)=>dispatch(remove(id)),[dispatch]);
    const onCounter=useCallback((id,counter)=>dispatch(counterChange(id,counter)),[dispatch]);
    

    console.log(selectContent);
    // const onAdd=(size,color)=>dispatch(size,color);
    //const id=selectCont.id;
    return(
        // <List data={selectCont} count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc}  />
        <>
        <Order onAdd={onAdd} selectContent={selectContent} onDelete={onDelete} onCounter={onCounter}/>
        </>
    )
}


export default ListContainer;