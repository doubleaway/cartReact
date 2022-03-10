import react,{useState} from  "react";


const List=({data,count,onIncrease,onDecrese,allCount,allCountFunc,alldeCountFunc,deleteOrder,OnCounterFunc})=>{

    return (
    <>
     
         {  data.map(
                data=>(data.id!=1000?<ListItem data={data} id={data.id}count={count} onDecrese={onDecrese} onIncrease={onIncrease} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc} deleteOrder={deleteOrder} OnCounterFunc={OnCounterFunc} key={data.id}/>:'')
            )
        }
    </>
    )
}

const ListItem=({data,count,onIncrease,onDecrese,allCount,allCountFunc,deleteOrder,id})=>{
    const [test,setTest]=useState(1);
    const {color,size}=data;

    
    const onClick=()=>{
        if(allCount<=1||test<=1){}

        else{
        allCountFunc(allCount-1);
        setTest(test-1);
        onDecrese(test,id);

        }

    }
    const increase=()=>{
        if(allCount<10){
            allCountFunc(allCount+1);
            setTest(test=>test+1)
            onIncrease(test,id);
        }

    }
    const onRemove=()=>{
        deleteOrder(id);
    }

    return   (
       
         <div className="list_item">

            <p><span>{size}</span> / <span>{color}</span></p>
            <div className="count_box">
                <span onClick={onClick}>-</span>
                <span className="count_box">{test}</span>
                <span onClick={increase}>+</span>
            </div>
            <span className="close_btn" onClick={onRemove}>x</span>
        </div>
    )
}


export default List;