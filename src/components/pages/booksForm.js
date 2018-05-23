import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { FormGroup,FormControl, ControlLabel,Button} from 'react-bootstrap';
import {postBooks} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';
import {deleteBooks} from '../../actions/bookActions';
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
    width: "100%"
}

let Panel2 ={
    background: "#fff",
    padding: "1rem",
    borderRadius: "5px",
    width: "100%",
    marginTop:'25px'
}

let danger = {
    background: "crimson",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "10px",
    transform: "translateY(13px)!important",
    color: "#fff"
}

class BookForm extends React.Component{
    handleSubmit(){
        const book = [{
         title:findDOMNode(this.refs.title).value,
         description:findDOMNode(this.refs.description).value,
         price:findDOMNode(this.refs.price).value
        }]
        this.props.postBooks(book)
        return console.log(book)
    }
    handleDelete(){
        const bookId = findDOMNode(this.refs.delete).value
        this.props.deleteBooks(bookId);
        return console.log('book deleted',bookId);
    }
    render(){
        const bookList = this.props.books.map(function(bookArr){
          return(
              <option key={bookArr.id}>{bookArr._id}</option>
          )
        })
        return(
            <div style={Well}>
                <div style={Panel}>
                    <FormGroup controlId='title'>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                        type='text'
                        placeholder='enter title'
                        ref='title'
                        />
                    </FormGroup>
                    <FormGroup controlId='title'>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                        type='text'
                        placeholder='enter description'
                        ref='description'
                        />
                    </FormGroup>
                    <FormGroup controlId='title'>
                        <ControlLabel>price</ControlLabel>
                        <FormControl
                        type='text'
                        placeholder='enter price'
                        ref='price'
                        />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle='primary'>Save Book</Button> 

                </div>    
              <div style={Panel2}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a book </ControlLabel>
                    <FormControl ref ='delete' componentClass="select" placeholder="select">
                        <option value="select">select</option>
                         {bookList}
                    </FormControl>
                </FormGroup>
                <button style={danger}onClick={this.handleDelete.bind(this)}>Delete</button>
              </div>
            </div>   
        )
    }
}

function mapStateToProps(state){
    return {
        books:state.books.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postBooks,
        deleteBooks
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookForm);