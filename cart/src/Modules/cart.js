
const price=26000;

//초기 data
const data={
    default:"이 장바구니는 비어있습니다.",
    data_con:[{
        id:0,
        count:0,
        size:'',
        color:''
    }]

};

const ADD='cart/ADD';//추가함
const REMOVE='cart/REMOVE';//삭제
const QUANTITY='cart/QUANTITY'; //수량추가
const COLOR='cart/COLOR';//color 변경

let id=0;//add될때마다 1씩 추가



// export const add=(id,size,color,counter)=>({
//     type:ADD,
//     data:{
//         id:id,
//         size:size,
//         color:color,
//         counter:counter,
//     }
//     ,
// });
export const add=(data)=>({
    type:ADD,
    // data:{
    //     id:data.id,
    //     count:data.counter,
    //     color:data.color,
    //     size:data.size
    // }
    data

})
export const counterChange=(id,counter)=>({
    type:QUANTITY,
    id,
    counter:counter
});
export const remove=(id)=>({
    type:REMOVE,
    id

});

export const colorChange=(color)=>({
    type: COLOR
});



export default function cart(state=data,action){

    switch (action.type){
        case ADD:           
        return {
            ...state,
            data_con:state.data_con.concat(action.data)
        }

        case QUANTITY:
            console.log(action.counter);
            return {
                data_con:state.data_con.map( memo => memo.id === action.id ? {...memo, count:action.counter} : memo)
            }
            // return  state.map( memo => memo.id === action.id ? {...memo, counter: action.counter} : memo)
        //    return {
                
        //         ...state,
        //          count:state.data_con.map( count => count.id === action.id ? {...count, counter: action.counter} : count)
        //         //  count:state.data_con.map( count => count.id === action.id ? console.log(action.counter) :  console.log(count.id+"아이디 안 같음") )
        
               
        //     }


        case REMOVE:
            return{
                ...state,
                data_con:state.data_con.filter(data=>data.id!==action.id)
            }


        default:return state;

    }
}

