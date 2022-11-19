import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = { 
        count: [
            {id:1, value:1},
            {id:2, value:2},
            {id:3, value:3},
        ]
     } 

     onIncrement =() =>{
        console.log("Increment is pressed");
     }

    render() { 
        return (
            <React.Fragment>
                <div className='container'>
                    {this.state.count.map(
                        count  => (
                            <Counter key={count.id} value = {count.value} onIncrement={this.onIncrement}/>
                        )
                    )}
                </div>
               
            </React.Fragment>
        );
    }
}
 
export default Counters;
