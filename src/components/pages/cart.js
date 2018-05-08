'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Button, Label,ButtonGroup} from 'react-bootstrap';
import {deleteFromCart,updateCart} from '../../actions/cartActions';
import Modal from '../helperComponents.js/modal';
import ModalTwo from '../anotherModal';

let Well={
    border: '.5px solid',
    padding: '2rem',
    borderRadius: '.5rem',
    background: 'rgb(237, 234, 234)',
    display: 'grid',
    margin: '1rem',
    justifyItems: 'start'
}

let Panel ={
    background: "#fff",
    padding: "1rem",
    borderRadius: "5px",
    width: "100%",
    background:'#eeeaea',
    borderRadius: '5px'
}

let primary={
    bacground:'blue',
    padding:'10px'
}
let toppy={
    height:'50px',
    background:'#007bff',
    borderRadius:'5px',
    padding:'5px',
    color:'#fff'
}
let insidePanel={
    background:'#fff',
    border:'1px solid #ccc',
    padding:'15px'
}

let success = {
    background: "#29d682",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "10px",
    transform: "translateY(13px)!important",
    color: "#fff"
}

let ml ={
    marginLeft: "3vw"
}
let display={
    display:'none'
}
class Cart extends React.Component{
    
    
    
    onDelete(_id){
        const currentBookToBeDeleted = this.props.cart;
        
        const indexToDelete = currentBookToBeDeleted.findIndex(
            function(cart){
            return cart._id === _id;
           
        });
        

        let cartAfterDelete = [...currentBookToBeDeleted.slice(0,indexToDelete),...currentBookToBeDeleted.slice(indexToDelete +1)]

     
      this.props.deleteFromCart(cartAfterDelete);
    }

    onIncrement(_id, quantity){
        console.log('id is here',_id)
        this.props.updateCart(_id,1);
    }
    
    onDecrement(_id,quantity){
      if(quantity > 1){
          this.props.updateCart(_id,-1);
      }
    }

    constructor(){
        super();
        this.close = this.close.bind(this);
        this.state ={
           
            active:false,
            show:false
        }
    }

    open(){
        
        this.setState({active:true});
        console.log('open says me!!',this.state.active)
    }

    

    close(){

        this.setState({active:false});

    }
/// this is second version of my modal
    show(){
        console.log('show being called',this.state.show)
         this.setState({
             ...this.state,
             show:true
         })
         console.log('show called',{show})
     }
 
     closeShow(){
         console.log('Closing Main Comp Now!!',this.state.show)
 
         this.setState({
             show:false
         })
     }




    render(){
         const cartListItems = this.props.cart.map(function(cartArr){
            return(
                <div style={Panel} key={cartArr._id}>
                  <Row>
                      <Col style={insidePanel}xs={12} sm={4}>
                        <h6>{cartArr.title}</h6> <span>     </span>
                      </Col>
                      <Col style={insidePanel}xs={12} sm={2}>
                        <h6>usd ${cartArr.price}</h6> 
                      </Col>
                      <Col style={insidePanel}xs={12} sm={2}>
                        <h6>qty.<Label style={success}>{cartArr.quantity}</Label></h6>
                      </Col>
                      <Col style={insidePanel}xs={6} sm={4}>
                       <ButtonGroup style={{minWidth:'300px'}}>
                         <Button onClick={this.onDecrement.bind(this,cartArr._id, cartArr.quantity)} bsStyle='default' bsSize=''snall >-</Button>
                         <Button onClick={this.onIncrement.bind(this,cartArr._id, cartArr.quantity)} bsStyle='default' bsSize=''snall >+</Button>
                         <span> </span>
                         <Button onClick={this.onDelete.bind(this,cartArr._id)} bsStyle='danger' bsSize='small'>DELETE</Button>
                       </ButtonGroup>
                      </Col>
                  </Row> 
                 
           

                 {/* <Modal active={this.state.active} close={this.close.bind(this)}>
                  <h2>{cartArr.title}</h2>
                </Modal> */}
              

                </div>
             )
          }, this)
        
     return(
            <div style={Panel}  bsStyle='primary' xs={12} md={12}>
             <div style={toppy}><h3>Cart</h3></div>
                <div style={Panel}>{cartListItems}</div>
              
                <Row>
                    <Col xs={12}>
                        <h6>Total amount:</h6>
                        <Button
                        onClick={this.open.bind(this)}
                        bsStyle="success" bsSize="small">
                                    PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>
              
               
               <input onClick={this.show.bind(this)}  type='button' value='clicking'/>
                <ModalTwo show={this.state.show}  close={this.closeShow.bind(this)} header='Header Hear' >
               
                </ModalTwo>  
            </div>   
       )
    }
}


function mapStateToProps(state){
    return {
      cart:state.carts.carts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteFromCart:deleteFromCart,
        updateCart:updateCart
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);




