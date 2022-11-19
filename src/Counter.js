import React, { Component } from 'react';
class Counter extends Component {
    state = { 
    
     } 

     styles = {
        spanAndButton : {
            marginLeft : "20px",
            marginTop : "20px"
        }
     }


    render() { 
        return (
            <React.Fragment>
            <span className= "badge bg-warning text-dark" style={this.styles.spanAndButton}>{this.state.count}</span>
            <button onClick= {this.props.onIncrement} type="button" class="btn btn-primary text-dark " style={{marginLeft: 20}}>Increment</button>
            <button onClick= {this.handleDecrement} type="button" class="btn btn-danger text-dark" style={{marginLeft: 20}}>Decrement</button>
            </React.Fragment>
        );
            
           
    }
}
 
export default Counter;