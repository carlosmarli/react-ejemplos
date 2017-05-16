import React, { Component } from 'react';

import {connect} from 'react-redux';

import {requestTimestampActionCreator} from '../actions/info-action-creators';

class App extends Component {

  render() {
    return (
      <div className="App">

          {(this.props.isLoading) && (
              <strong>Cargando...</strong>
          )}

          <h1>IORNI PRUEBAS - React - Redux - Saga</h1>

          <h2>XXX{this.props.lastTimestamp}</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloribus, enim laudantium nisi porro repudiandae suscipit ullam. Dolore fuga ullam voluptates? Consectetur excepturi itaque minima minus nam, officia quas quasi?
          </p>
          <button onClick={this.props.requestInfo}>Traer info</button>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
    return{
        isLoading: state.infoReducer.isLoading,
        lastTimestamp: state.infoReducer.lastTimestamp
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        requestInfo: () =>{
            dispatch( requestTimestampActionCreator() );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
