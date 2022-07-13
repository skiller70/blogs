import React, { Component } from 'react';
import { connect } from 'react-redux';
class Reduxtest extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1> hello bros</h1>
                <h2> hello {this.props.userDetail.name} </h2>
            </div>
        );
    }
}
const mapStateToProp =(state)=>{
    
    return  {userDetail : state.custom.USER_TOKEN_VALUE}
}
export default connect(mapStateToProp)(Reduxtest);