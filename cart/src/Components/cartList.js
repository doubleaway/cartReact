import React,{useEffect, useState} from  "react";


const CartListItem=({data,key,onPriceCalc,id,deleteOrder,onCounter})=>{


    // console.log(data);
    const {color,size,count}=data;  
    const [test,setTest]=useState(count);
    const [result,setResult]=useState(0);
    var title="무지 오리지널 후드티"
    var img='./img/'+color+'cloth (1).png';

    const onClick=()=>{
        // if(allCount<=0||test<=0){}

        // else{
        // alldeCountFunc(allCount-1);
        setTest(test-1);
        // onDecrese(test);
        onCounter(id,count-1);
        // }

    }
    const increase=()=>{
        // if(allCount<5){
            // allCountFunc(allCount+1);
            setTest(test+1)
            // onIncrease(test);
            onCounter(id,count+1);

        // }

    }

    console.log(id);
    console.log(test);

    const onRemove=()=>{
        deleteOrder(id);
        // console.log(id);
    }
    

    return   (
       
                <ul className="shopping_list" >
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