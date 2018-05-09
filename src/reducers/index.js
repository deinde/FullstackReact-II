'use strict'


//import combinreducers to put all reducers together
import {combineReducers} from 'redux';

//import the card reducers 
import {cartReducers} from './cartReducers';                              


//import books reducers
import {booksReducers} from './bookReducers';
                              



//Here is where we actually cobine the reducers
console.log('here are the CartReducers reducers',cartReducers)

export default combineReducers({
   
    books:booksReducers,
    carts:cartReducers
    
})
    


