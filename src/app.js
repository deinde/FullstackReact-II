


'use strict';
//import react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';


import reducers from './reducers/index';

import BooksList from './components/pages/booksList';
import Menu from './components/pages/menu';
import Footer from './components/pages/footer';



//import {postToBooks} from './actions/bookActions';


import {addToCart} from './actions/cartActions';
import {postToBooks,deleteBooks,updateBooks,talk} from './actions/bookActions';
//import {talk} from './actions/bookActions';


const store = createStore(
    reducers,
    applyMiddleware(logger)
);


render(
  <Provider store = {store} >
   <div>
    <Menu />
    <BooksList />
    <Footer/>
   </div>
 </Provider>, document.getElementById('app')


  );

 