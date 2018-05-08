
import React from 'react';
import { CSSTransition, transit } from "react-css-transition";



let but = {
  padding: '20px 50px',
  borderRadius: '5px',
  background: 'rgb(237, 234, 234)',
  // gridRow:'3/ 4',
  // gridColumn: '4/5'
  display:'grid'
  
}

let what = {
  padding: '20px 50px',
  borderRadius: '5px',
  background: 'rgb(237, 234, 234)',
  gridRow: '2/ 3',
  // gridColumn: '4/5'


}
let container={
  display:'grid',
  gridTemplateColumns:'repeat(8,max-content)',
//   gridTemplateRows: 'repeat(8,100px)',
  justifyContent:'center',
  alignContent:'center'
  
}

let expandModal = {
  position: 'absolute',
  width: '100%',
  height:'100%',
  top:0,
  left:0,
  background:'rgba(000,000,000,.5)',
  zIndex:999,
  display:'grid',
  gridTemplateColumns: '1fr 70vw 1fr',
  gridTemplateRows: '200px 300px',
  justifyContent:'center'
}

let innerMod ={
   background:'#fff',
   borderRadius: '5px',
   padding:'10px',
   gridColumn:'2/3',
   gridRow:'2/3',
 

}
let lines ={
  borderTop:'1px solid #ccc',
  borderBottom: '1px solid #ccc',
  height:'150px'


}


const styles ={

  defaultStyle: {
    top: "200px",
  },
  enterInitStyle: {
    transform: "translate(0, 200) rotate(30deg)",
  },
  enterStyle: {
    transform: transit("translate(0,-100px) ", 500, "ease-in-out"),
  },
  leaveStyle: {
    transform: transit("translate(0, 0)", 500, "ease-in-out"),
  },
  leaveInitStyle: {
    transform: "translate(0,-200px)",
  },
  activeStyle: {
    top: "200px",
  },
};



class DeindeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
    this.modalToggle = this.modalToggle.bind(this);
    this.renderModal = this.renderModal.bind(this);
    //another way
    this.openMod = this.openMod.bind(this);
    this.closeMod = this.closeMod.bind(this);
  }
  //if you choose to toggle
  modalToggle() {
    this.setState({
      active: !this.state.open
    });
  }

  openMod(){
   this.setState({
     active:true
   })
  }

  closeMod(){
    this.setState({
      active:false
    })
  }


//renderModal has the logic to show or not with ternary
  renderModal() {
    return this.props.active ? <div style={expandModal}>
    <div style={innerMod}>
        <button onClick={this.props.close}>X</button>

        <h2>{this.props.heading}</h2>
        <div style={lines}>
          {this.props.children}
        </div>

    </div>
    </div> : '';
  }
  render() {
    return (
      <div style={container}>
        <div >
          <CSSTransition {...styles} active={this.props.active}>
          {this.renderModal()}
          </CSSTransition>

        </div>
      </div>
    )
  }
}


export default DeindeModal;