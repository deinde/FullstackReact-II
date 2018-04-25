'use strict'



export function cartReducers(state={carts:[]},action) {
    switch(action.type){
    case "ADD_TO_CART":
    console.log('cart being called!!!!!')
     return {carts:[...state.carts,...action.payload]}
           
     break;
    }
    return state;
   
}

