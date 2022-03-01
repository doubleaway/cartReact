import React, {useState} from "react";


const ImgBox=({classN,color,number,imgChange,colorChange})=>{

    const imgChangeFunc=(img)=>{imgChange(img);}

    let imgsrc=[];
    for(var i=0; i<Number(number);i++){
        imgsrc.push(i+1);
    }
    const srcO="img/"+color+'cloth (';
    const srcE=").png";
    return(
        <div className={classN} >
            {
                imgsrc.map(img=>(
                    <img key={img} src={srcO+img+srcE} onClick={()=>{imgChangeFunc(img)}}/>
                ))
            }
        </div>
    )
}


export default ImgBox;