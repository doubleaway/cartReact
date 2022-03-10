import React,{useEffect, useState} from  "react";


const CartListItem=({data,key,onPriceCalc,id,deleteOrder,onCounter})=>{


    const {color,size,count}=data;  
    var title="무지 오리지널 후드티"
    var img='./img/'+color+'cloth (1).png';

    const onClick=()=>{
        if(0<count)
            onCounter(id,count-1);
        else{
            deleteOrder(id);
        }  


    }
    const increase=()=>{

            onCounter(id,count+1)

    }


    const onRemove=()=>{
        deleteOrder(id);
    }
    

    return   (
       
                <ul className="shopping_list">
                        <li><img src={img}/><span>{title} {color}</span></li>
                        <li>{color}</li>
                        <li>{size}</li>
                        <li className="count_box">
                        <span onClick={onClick}>-</span>
                            <span>{count}</span>
                            <span onClick={increase}>+</span>
                        </li>
                        <li onClick={onRemove}><span className="close_btn">X</span></li>
                    </ul>
    )
}


export default CartListItem;