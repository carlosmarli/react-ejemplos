import React, {Component} from 'react'
import {connect} from 'react-redux';
import {decrementActionCreator, incrementActionCreator} from '../actions/counter-action-creators'

class Counter extends Component{
    render(){
        return(
            <div>
                <h1>Contador {this.props.contador}</h1>
                <button onClick={this.props.increment}>Subir</button>
                &nbsp;
                <button onClick={this.props.decrement}>Bajar</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        contador: state.counterReducer.contador
    }
}

const mapDispatchToProps = dispatch => {
    return{
        increment: () => {
            dispatch(incrementActionCreator(3))
        },
        decrement: () => {
            dispatch(decrementActionCreator(3))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)