import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

//Class compontent
class App extends React.Component {
  constructor(){
    super();
    this.state = {a: ''};
  }
  update(e){
    this.setState({
      // a: this.a.value,
      // a: ReactDOM.findDOMNode(this.a).value,
      a: this.a.refs.input.value,
      b: this.refs.b.value
   });
  }
  render(){
    return (
      <div>
        {/* <input
          ref={ node => this.a = node}
          type="text"
          onChange={this.update.bind(this)}
        /> 
        {this.state.a} */}
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /> 
        {this.state.a}
        <hr />
        <input 
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> 
        {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default App