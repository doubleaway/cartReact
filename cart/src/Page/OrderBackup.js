import React, {useCallback, useState} from "react";
// import ImgBox from "../Components/ImgBox";
import Button from "../Components/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import ListContainer from "../Conatiners/ListContainer";
import ImgBox from "../Components/ImgBox";
import SelectBox from "../Components/SelectBox";
import List from "../Components/List";
import {AiFillShopping} from "react-icons/ai";

const OrderBackup=({data,onAdd,onDelete,onCounter})=>{
    // 화면 출력용 데이타
    const listData=[];
    // count,calc
    const [count,setCount]=useState(0);
    const [allCount,setAllCount]=useState(0);
    const [calc,setCalc]=useState(0);

    // img
    const [img,setImg]=useState("1");
    const imgChange=(img)=>{setImg(img);}

    //color
    const colors=['black','gray','red'];
    const [colorCh,setColorCh]=useState("black");
    const colorChange=useCallback((color)=>{setColorCh(color);},[colorCh]);

    if(allCount>5){setAllCount(5);}
    const price=26000;
    // 카운트
    const onIncrease=(count)=>{
        setCount(count);
    }
    const allCountFunc=(allCount)=>{
        setAllCount(allCount);
        setCalc((Number(price)*(allCount)));
    }
    const alldeCountFunc=(allCount)=>{
        setAllCount(allCount);
        setCalc((Number(price)*(allCount)));
    
    }
    const onDecrese=(count)=>{setCount(count);}


    const OnCounterFunc=(id,counter)=>{
        onCounter(id,counter);
    }
    // select box
    const sizeSentense='사이즈를 선택해주세요';
    const colorSentense='색상을 선택해주세요';
    const size=['M',"S","XL","XS","L"];
    const color=["Gray","Black","Red"];
    const [colorSelected,setColorSetSelected]=useState(colorSentense);
    const [sizeSelected,setSizeSetSelected]=useState(sizeSentense);
    const onSelect=(e)=>{
        setSizeSetSelected(e.target.value);
    }
    const onColorSelect=(e)=>{
        e.preventDefault();
        setColorSetSelected(e.target.value);
        if(colorSelected!==colorSentense)
            onAdd(sizeSelected, colorSelected,count);
    }

return(
    <section >
        <header>
            <h1>The Palete</h1>
            <span>포트폴리오용으로 작업된 사이트입니다.</span>
            <Button color="none" contents={<AiFillShopping/>}/>
            무아ㅓㄹ다ㅣㅓ다ㅣㅓㄷㄹ

        </header>
        <div className="body_box">
           <div className="pic_box">
                <div className="main">
                    <img src={"img/"+colorCh+"cloth ("+img+").png"}/>
                </div>
               
                    <ImgBox number="4"  classN="sub" imgChange={imgChange} color={colorCh} colorChange={colorChange}/>
               
           </div>
           <div className="ex_box">
               <h1>
                   상품명
               </h1>
               <hr/>
               <div className="price_box">
                   <h3>Price</h3>
                   <h2>26,000</h2>
               </div>
               <hr/>
               <div className="info_box">
                   <h1><span><AiOutlineShoppingCart/> </span> 배송비 <span>5000원</span></h1>
                   <p>10만원이상 구매 시 <span className="axent"> 무료 배송!</span></p>
                   <p ><span className="axent">오늘 주문 시 이틀 뒤 도착예정</span>(지역에 따라 배송이 지연될 수 있습니다. 경기/서울 기준)</p>               </div>
               <hr/>
               <div className="color_change_button_box">
                   <h3>Color</h3>

                   <ul>
                       {colors.map(color=>(<li className={"btn_color_change back_"+color} key={color} onClick={()=>{colorChange(color)}}></li>))}
                   </ul>
               </div>
           </div>
           <div className="select_box">
                <select  value={sizeSelected} onChange={onSelect}>
                        <option value=''>사이즈를 선택해주세요</option>
                     {size.map(select=><option value={select} key={select}>{select}</option>)}
               </select>
               <select  value={colorSelected}  onChange={onColorSelect} >
                   <option value=''>색상을 선택해주세요</option>
                   {color.map(select=><option  value={select} key={select}>{select}</option>)}
               </select>
               <hr/>
               <p>최대 구매 수량 5개</p>
               <hr/>
               <div>
                   <List count={count} onIncrease={onIncrease} onDecrese={onDecrese} allCount={allCount} allCountFunc={allCountFunc} alldeCountFunc={alldeCountFunc} data={data} onDelete={onDelete} OnCounterFunc={OnCounterFunc}/>
               </div>
               <hr/>
               <div className="result_box">
                   <p><span>총 </span>{allCount}개</p>
                  <p> <span className="axent">{calc}</span><span>원</span></p>
               </div>
               <div className="button_box">
                   <button onClick={}>구입하기</button>
               </div>
           </div>
        </div>
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



export default OrderBackup;
