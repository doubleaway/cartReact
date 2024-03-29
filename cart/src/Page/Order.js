import React, {useCallback, useState} from "react";
// import ImgBox from "../Components/ImgBox";
import Button from "../Components/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import ListContainer from "../Conatiners/ListContainer";
import ImgBox from "../Components/ImgBox";
import SelectBox from "../Components/SelectBox";
import List from "../Components/List";
import {AiFillShopping} from "react-icons/ai";
import OrderContainer from "../Conatiners/OrderContainer";
import ShoppingBasket from "./ShoppingBasket";

const Order=({onAdd,selectContent,onDelete,onCounter})=>{


    const price=26000;
    // 화면 출력용 데이터
    const [listData,setListData]=useState([]);


    var cartVal=0;
    var [listId,setListId]=useState(1);


    // count,calc
    const [countVal,setCount]=useState(1);
    const [allCount,setAllCount]=useState(0);
    const [calc,setCalc]=useState(0);
    const [cart,setCart]=useState(0);


    // img
    const [img,setImg]=useState("1");
    const imgChange=(img)=>{setImg(img);}

    //color
    const colors=['black','gray','red'];
    const [colorCh,setColorCh]=useState("black");
    const colorChange=useCallback((color)=>{setColorCh(color);},[colorCh]);



    // 카운트
    const onIncrease=(count,id)=>{
        setCount(count);
        setListData(listData.map(
            list => list.id === id
            ? {...list, count:count+1 }
            : list
          ));
   
    }
    const allCountFunc=(allCount)=>{
        setAllCount(allCount);
        setCalc((Number(price)*(allCount)));
    }

    const onDecrese=(count,id)=>{
        setCount(count);
        setListData(listData.map(
            list => list.id === id
            ? {...list, count:(count+1) }
            : list
          ));
    }




    // select box
    const size=['M',"S","XL","XS","L"];
    const color=["black","gray","red"];
    const [colorSelected,setColorSetSelected]=useState('');
    const [sizeSelected,setSizeSetSelected]=useState('');


    const onSelect=(e)=>{
        setSizeSetSelected(e.target.value);
        console.log(sizeSelected)
        if(colorSelected==''){
        setColorSetSelected('');
        }
    }


    const onColorSelect=(e)=>{
        e.preventDefault();
        setColorSetSelected(e.target.value);
    }


    const onSelectAdd=()=>{
        console.log(sizeSelected);
            if(sizeSelected!==''&&colorSelected!==''&&allCount<10){
                addOrder(countVal); 
                setColorSetSelected('');
                setSizeSetSelected('');
            }
         
            

    }


    //출력용 리스트 변경
    //추가
    const addOrder=(count)=>{
        setListId(listId=>listId+1);
        const listDataAdd={
            id:listId,
            count:count,
            color:colorSelected,
            size: sizeSelected
        };
        setListData(listData.concat(listDataAdd));
        // setCart(cart=>cart+1);
        setAllCount(allCount=>allCount+=1);
        allCountFunc((allCount+1));

    }
    //삭제
    const deleteOrder=(id)=>{
        setListData(listData.filter(list=>list.id!==id));
        setCart(cart=>cart-1);
    }


        
    // 실제장바구니 값 
    const cartListAdd=()=>{
        if(countVal!==0){
            onAdd(listData);
            setCart(listId-1);
            // setListData([{
            //     id:1000,
            //     count:'',
            //     size:'',
            //     color:'',
            // }]);
            setListData([]);
            setAllCount(0);
            setCalc(0);
        }
    }


    // 장바구니 보이게
    const [cartShow,setCartShow]=useState(false);
    const cartShowFunc=()=>{
        setCartShow(!cartShow);
    }

    

   
   var test22=selectContent.data_con.map(data=>(data.count!==0?26000*(data.count):data.count));   var test3=0
test22.forEach( (item) => {
    test3 += item;
  });


return(
    <section >
        <header>
            <h1>The Palete</h1>
            <span>포트폴리오용으로 작업된 사이트입니다.</span>
            <div onClick={cartShowFunc}> 
                <AiFillShopping size={25}/>
                <span>{selectContent.data_con.length>1?selectContent.data_con.length-1:0}</span>
            </div>
        </header>
        <article className="body_box">
           <article className="pic_box">
                <div className="main">
                    <img src={"img/"+colorCh+"cloth ("+img+").png"}/>
                </div>           
                    <ImgBox number="4"  classN="sub" imgChange={imgChange} color={colorCh} colorChange={colorChange}/>
           </article>
            <article className="content_box">
                <div className="ex_box">
                    <h1>
                        무지 오리지널 후드티 | 블랙  | 그레이 | 레드
                    </h1>
                    <p></p>
                    <hr/>
                    <div className="price_box">
                        <h3>Price</h3>
                        <p>26,000</p>
                    </div>
                    <hr/>
                    <div className="info_box">
                        <h1><span><AiOutlineShoppingCart/> </span> 배송비 <span>5000원</span></h1>
                        <p>10만원이상 구매 시 <span className="axent"> 무료 배송!</span></p>
                    </div>
                    <hr/>
                    <div className="color_change_button_box">
                        <h3>Color</h3>
                        <ul>
                            {colors.map(color=>(<li className={"btn_color_change back_"+color} key={color} onClick={()=>{colorChange(color)}}></li>))}
                        </ul>
                    </div>
                </div>
                <div className="select_box">
                    <select  value={sizeSelected} onChange={onSelect}  onClick={onSelectAdd}>
                        <option value=''>사이즈를 선택해주세요</option>
                            {size.map((select,idx)=><option value={select} key={idx}>{select}
                        </option>)}
                    </select>
                    <select  value={colorSelected}  onChange={onColorSelect} onClick={onSelectAdd}>
                        <option value=''>색상을 선택해주세요</option>
                        {color.map((select,idx)=><option  value={select} key={idx}>{select}</option>)}
                    </select>
                    <hr/>
                    <p>최대 선택 수량 10개</p>
                    <hr/>
                    <div>
                        <List data={listData} count={countVal} onIncrease={onIncrease} onDecrese={onDecrese} allCount={allCount} allCountFunc={allCountFunc}  deleteOrder={deleteOrder}/>
                    </div>
                    <hr/>
                    <div className="result_box">
                        <p><span>총 </span>{allCount}개</p>
                        <p> <span className="axent">{calc}</span><span>원</span></p>
                    </div>
                    <div className="button_box">
                       {allCount>0? <button onClick={cartListAdd}>장바구니</button>:<div>구입하기</div>}
                    </div>
                </div>
            </article>
        </article>
   {/* {cartShow?<OrderContainer/>:''} */}
        {selectContent.data_con.map(m=><div key={m.id}>{m.id}</div>)}
       {cartShow? <ShoppingBasket selectCount={selectContent} onCounter={onCounter} onDelete={onDelete} price={test3}
       />:''}
    </section>
)
    
    
}
// const ImgBox=({classN,color,number,mainImg})=>{
//     const [imgChange,setImgChange]=useState(1);
//     const imgChangeFunc= useCallback(()=> {
//
//             setImgChange(this);
//         },[imgChange]
//     )
//     let img;
//     img=<li></li>;
//
//     let imgsrc=[];
//     for(var i=0; i<Number(number);i++){
//         imgsrc.push(i+1);
//     }
//     const srcO="img/"+color+'cloth (';
//     const srcE=").png";
//     var mainSrc;
//     mainSrc=<img src={srcO+imgChange+srcE}/>
//     return(
//         <>
//             {classN=='main'?<div className="main"><img src={srcO+imgChange+srcE}/></div>:''}
//             {classN=='sub'? <div className="sub">{imgsrc.map(img=>(<img key={img} src={srcO+img+srcE} onClick={imgChangeFunc}/>))}</div>:''}
//         </>
//     )
// }



export default Order;
