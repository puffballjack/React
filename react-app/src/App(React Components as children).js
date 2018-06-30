import React from 'react';
import propTypes from 'prop-types';

//Class compontent
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
    }
  }
  update( e ) {
    this.setState({txt: e.target.value})
    //this.setState({txt: "Howdy"})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update}/>


export default App