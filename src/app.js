// "use strict"
// import React from 'react';
// import {render} from 'react-dom';
// import {Provider} from 'react-redux';


// import {applyMiddleWare,createStore} from 'redux';
// import logger from 'react-logger';

// // Import Combined Reducers
// import reducers from './reducers/index';

// //Import actions 

// import {addToCart} from './actions/cartActions';
// import {postBooks, updateBooks, deleteBooks} from './actions/bookActions';

// //Import components
// import BookList from '.components/pages/bookList';

// //Step 1 Create the store!!

// const middleWare = applyMiddleWare(logger);

// const store = createStore(reducers,middleWare);


// render(
//     <Provider>
//         <BookList/>
//     </Provider>, document.getElementById('app')
// );




'use strict';
//import react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';


import reducers from './reducers/index';

import BooksList from './components/pages/booksList';
//import {postToBooks} from './actions/bookActions';


import {addToCart} from './actions/cartActions';
import {postToBooks,deleteBooks,updateBooks,talk} from './actions/bookActions';
//import {talk} from './actions/bookActions';

//Create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);





render(
  <Provider store = {store} >
    <BooksList />
  </Provider>, document.getElementById('app')


  );

 