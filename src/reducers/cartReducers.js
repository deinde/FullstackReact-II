'use strict'



export function cartReducers(state={carts:[]},action) {
    switch(action.type){
    case "ADD_TO_CART":
    console.log('cart being called!!!!!')
     return {carts:[...state.carts,...action.payload]}
           
     break;
     case "DELETE_FROM_CART":

     
    //  return {carts:[...state.carts,...action.payload]}
    //BELOW takes copy of current state = [empty cart] and copy of action.payload
    //and sets it to carts property in state object state={carts:[action.payload]}
    //so whatever is coming in from action.payload will overide and become the new state
    return  {...state,carts:action.payload}
    break;
    
    
    
    
    
    case "UPDATE_CART" :
    // console.log('update being called!!!',action._id)

    const currentBookToUpdate = [...state.carts];
     
    const indexOfUpDate = currentBookToUpdate.findIndex(
        function(book){

            return book._id === action._id;
        }
    )
    const newBookeToUpdate = {
        ...currentBookToUpdate[indexOfUpDate],
        quantity:currentBookToUpdate[indexOfUpDate].quantity + action.unit
    }
    console.log('this is the updated cart quantity', newBookeToUpdate)
    let cartUpdate = [...currentBookToUpdate.slice(0,indexOfUpDate), newBookeToUpdate, ...currentBookToUpdate.slice(indexOfUpDate + 1)];
     console.log('quantity is increasing!!!')
    return {...state,
        carts:cartUpdate}
    break;

    }



    return state;

  
   
}

// Lets total the amounts 

export default function totals(payloadArr){
  
  const totalAmount = payloadArr.map(function(cartIndiv){
    return cartIndiv.quantity * cartIndiv.price;
  }).reduce(function(a,b){
      return a + b;
  },0)


 return {
     amount:totalAmount.toFixed(2)
  }
    
}