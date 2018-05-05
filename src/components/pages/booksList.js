"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import BookListItem from './bookListItem';
import BookForm from './booksForm';
import Cart from './cart';


class BooksList extends React.Component{
    ComponentDidMount(){
        this.props.getBooks();
        console.log('get books being called in did mount')
    }
    render(){
        const bookList = this.props.book.map(function(bookArr){
           return(
            <Col key={bookArr._id}>
             <BookListItem
              _id={bookArr._id}
              title={bookArr.title}
              description={bookArr.description}
              price={bookArr.price}
              />
              </Col>
           );
        });
        return(
        <Grid>
            <Row>
            <Col xs={12} sm={12}>
                <Cart/>
             </Col>
            </Row>    
            <Row >
                <Col xs={12} sm={8}>
            <BookForm/>
            </Col>
            <Col xs={12} sm={4} >
                {bookList}
            </Col> 
            </Row> 
            
        </Grid>
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


function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks:getBooks},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList);


