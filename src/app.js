


'use strict';
//import react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';


import reducers from './reducers/index';

import BooksList from './components/pages/booksList';
// import Menu from './components/pages/menu';
// import Footer from './components/pages/footer';

import {addToCart} from './actions/cartActions';
import {postToBooks,deleteBooks,updateBooks,talk} from './actions/bookActions';
//import {talk} from './actions/bookActions';

import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Cart from './components/pages/cart';
import BookForm from './components/pages/booksForm';
import Main from './main';
import booksForm from './components/pages/booksForm';


const store = createStore(
    reducers,
    applyMiddleware(logger)
);

const RouterCust = (
    <Provider store = {store} >
     <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute path='' component={BooksList}/>
        <Route path='/admin' component={BookForm}/>
        <Route path='/cart' component={Cart}/>
      </Route>  
     </Router>  
   </Provider>
)

render(
 RouterCust, document.getElementById('app')
 );

 