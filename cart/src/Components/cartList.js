import React,{useState} from  "react";


const CartList=({data})=>{
console.log(data);
    return (
    <>
     
         {/* {  data.map(
                data=>(data.id!=0?<CartListItem data={data} />:'')
            )
        } */}

    </>
    )
}

const CartListItem=({data})=>{
    const [test,setTest]=useState(1);
    const {id,color,size,count}=data;
    console.log(data);
    var title="무지 오리지널 후드티"
    var img='./img/'+color+'cloth (1).png';
    // const onClick=()=>{
    //     if(allCount<=0||test<=0){}

    //     else{
    //     alldeCountFunc(allCount-1);
    //     setTest(test-1);
    //     onDecrese(test);

    //     }

    // }
    // const increase=()=>{
    //     if(allCount<5){
    //         allCountFunc(allCount+1);
    //         setTest(test+1)
    //         onIncrease(test);
    //         OnCounterFunc(id,test+1);

    //     }

    // }
    // const onRemove=()=>{
    //     deleteOrder(id);
    // }

    return   (
       
                <ul className="shopping_list">
                        <li><img src={img}/><span>{title} {color}</span></li>
                        <li>{color}</li>
                        <li>{size}</li>
                        <li className="count_box">
                            <span>+</span>
                            <span>{count}</span>
                            <span>-</span>
                        </li>
                        <li><span className="close_btn">X</span></li>
                    </ul>
    )
}


export default CartListItem;