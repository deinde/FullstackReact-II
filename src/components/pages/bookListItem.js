'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Button} from 'react-bootstrap';
import {addToCart,updateCart} from '../../actions/cartActions';


let Well={
    border: '.5px solid',
    padding: '2rem',
    borderRadius: '.5rem',
    background: 'rgb(237, 234, 234)',
    display: 'grid',
    margin: '1rem',
    justifyItems: 'start'
}


class BookListItem extends React.Component{
    handleCart(){
        const book =[...this.props.cart,{
            _id:this.props._id,
            title:this.props.title,
            description:this.props.description,
            price:this.props.price,
            quantity:1
        }]

        
        //  if(this.props.cart.length > 0){
           
        //    let _id = this.props._id;
        // //    console.log('yo',this.props.cart)
        //    this.props.updateCart(_id,1)
           
        //     let currentIndex = this.props.cart.findIndex(function(cart){
        //       return cart._id === _id;
        //       //if empty aka '-1' then add book
        //       if(currentIndex === -1){
        //           this.props.addToCart(book);
        //         alert('its empty!!!')
        //       }else{
        //       // if a matching _id is found then only update the quantity!!!
        //       this.props.updateCart(_id,1)
        //       }
            
        //   }
        // )

        // CHECK IF CART IS EMPTY
        if (this.props.cart.length > 0) {
            // CART IS NOT EMPTY
            let _id = this.props._id;
            let cartIndex =
                this.props.cart.findIndex(function(cart) {
                    return cart._id === _id;
                })
                // IF RETURNS -1 THERE ARE NO ITEMS
                //WITH SAME ID IN CART SO ADD A BOOK
            if (cartIndex === -1) {
                this.props.addToCart(book);
            } else {
                // WE NEED TO UPDATE QUANTITY
                this.props.updateCart(_id, 1)
            }
        } else {
            // CART IS EMPTY SO ADD A BOOK
            this.props.addToCart(book);
        }
        }



    render(){
        return(
            <div style={Well}>
              <Row>
                 <Col xs={12}>
                   <h6>{this.props.title}</h6>
                   <p>{this.props.description}</p>
                   <h6>${this.props.price}</h6>
                   <Button onClick={this.handleCart.bind(this)}   bsStyle='primary'>Buy Now</Button>
                 </Col>
              </Row>  
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
     cart: state.carts.carts
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addToCart:addToCart,
        updateCart:updateCart
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookListItem);