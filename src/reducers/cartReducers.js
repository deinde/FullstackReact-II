'use strict'



export function cartReducers(state={carts:[]},action) {
    switch(action.type){
    case "ADD_TO_CART":
    console.log('this is the action.unit',action.payload.quantity)
     return {...state,
        carts:action.payload,
        totalAmount:totals(action.payload).amount,
        totalQty:totals(action.payload).qty}
           
     break;
     case "DELETE_FROM_CART":

     
    //  return {carts:[...state.carts,...action.payload]}
    //BELOW takes copy of current state = [empty cart] and copy of action.payload
    //and sets it to carts property in state object state={carts:[action.payload]}
    //so whatever is coming in from action.payload will overide and become the new state
    return  {...state,
        carts:action.payload,
        totalAmount:totals(action.payload).amount,
        totalQty:totals(action.payload).qty
    }
    break;
    
    
    
    
    
    case "UPDATE_CART" :
    console.log('update being called!!!',action.unit)

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
        carts:cartUpdate,
        totalAmount:totals(cartUpdate).amount,
        totalQty:totals(cartUpdate).qty
    }
    break;

    }



    return state;

  
   
}

// Lets total the amounts 

export default function totals(payloadArr){
  
    //first method to get totals
  const totalAmount = payloadArr.map(function(cartIndiv){
    return cartIndiv.quantity * cartIndiv.price;
  }).reduce(function(a,b){
      return a + b;
  },0)

  //second method for quantity
  const totalQty = payloadArr.map(function(cartQty){
     return cartQty.quantity 
  }).reduce(function(a,b){
      return a + b;
  },0)

 return {
     amount:totalAmount.toFixed(2),
     qty:totalQty
  }
    
}