import React from 'react';
import propTypes from 'prop-types';

//Class compontent
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
    //React.createElement(element, props, another element or string of element context)
      //React.createElement('h1', null, 'Hello series')
    //JSX
    <div>
      <h1>{txt}</h1>
      <h1>{this.props.txt}</h1>
      <h1>Hello Series</h1>
      <b>Bold</b>
      <h1>{this.props.cat}</h1>
    </div>
    );
  }
}

App.propTypes = {
  txt: propTypes.string,
  cat: propTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default prop",
  cat: 27
}
//Stateless function component.
// const App = () => <h1>Hi</h1>

export default App