import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions.js';
 
function Counter({counter, inc, dec, rnd}){
    return(
        <div>
            <h2>Counter <span>{counter}</span></h2>
            <div>
                <button onClick = {inc} 
                        className="btn btn-primary">INC + </button>
                <button onClick = {dec} 
                        className="btn btn-secondary">DEC - </button>
                <button onClick = {rnd} 
                        className="btn btn-warning">RND + ?</button>
            </div>
        </div>
    );
}

const mapStateToProps  = (state) => {
    return {
        counter: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     let {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//     return {
//         inc: inc,
//         dec: dec,
//         rnd: rnd
//     }
// }



export default connect(mapStateToProps, actions)(Counter);