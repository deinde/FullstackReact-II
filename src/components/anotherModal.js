import React from 'react';
import PropTypes from 'prop-types';


let backDrop = {
    position:'fixed',
    top:0,
    right:0,
    bottom:0,
    left:0,
    height:'100%',
    width:'100%',
    background:'rgba(000,000,000,.4)',
    zIndex:999  
  }
  let modal={
      position:'relative',
      maxWidth:'700px',
      minHeight:'400px',
      background:'#fff',
      margin:'30vh auto',
      borderRadius:'10px',
      paddingLeft:'20px'
      
  }

  let footer={
      position:'absolute',
      bottom:'30px',
    
  }


export default class ModalTwo extends React.Component{
    

    handleClose(){
        
        this.props.close();
    }
    render(){
       
        if(!this.props.show)
          return null
            return(
                <div style={backDrop}>
                    <div style={modal}>
                        <h4>{this.props.header}</h4>
                        {this.props.children}
                        <div style={footer}>
                        <button onClick={this.handleClose.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
            )
    }
} 

ModalTwo.propTypes ={
    close:PropTypes.func.isRequired
}