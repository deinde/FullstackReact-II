'use strict';
import React from 'react';
import Menu from './components/pages/menu';
import Footer from './components/pages/footer';
import {connect} from 'react-redux';


class Main extends React.Component{
    render(){
        return(
         <div>
             <Menu cartItemsNumber={this.props.totalQty}/>
             {this.props.children }
             <Footer/>
         </div>
        )
    }
}

function mapStateToProps(state){
    return {
        //here we access directly not whole object
        totalQty:state.carts.totalQty
    }
}

export default connect(mapStateToProps)(Main);