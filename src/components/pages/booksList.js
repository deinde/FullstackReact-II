"use strict";

import React from 'react';
import {connect} from 'react-redux';



class BooksList extends React.Component{
    render(){
        const bookList = this.props.book.map(function(bookArr){
           return(
               <div key={bookArr.id}>
                 <h2>{bookArr.title}</h2>
                 <h2>{bookArr.description}</h2>
                 <h2> ${bookArr.price}</h2>
               </div>
           );
        });
        return(
        <div>
            <h1>Hello  Good To Go!</h1>
            {bookList}
        </div>
        )
    }
}


function mapStateToProps(state){
    return {
      book:state.books.books
    }
}


// subscribing BookList to store by passing mapStateToProps to store through
//connect which returns a closure function which accepts BookList component as 
//argument to complete the subscription process


export default connect(mapStateToProps)(BooksList);


