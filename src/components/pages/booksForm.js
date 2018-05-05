import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { FormGroup,FormControl, ControlLabel,Button} from 'react-bootstrap';
import {postBooks} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';
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
    render(){
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

            </div>   
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postBooks},dispatch);
}

export default connect(null,mapDispatchToProps)(BookForm);