import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'
import { CSSTransition } from "react-transition-group";

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0],
      transitionClass: null
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

//   transitionClasses(direction) {
//     const { propertyButtonDirection } = this.state;

//     if (direction !== undefined) {
//       return {
//         enter: `slide-left-enter`,
//         enterActive: `slide-left-active-enter`,
//         exit: `slide-left-exit`,
//         exitActive: `slide-left-active-exit`,
//       }
//     } else {
//       return {
//         enter: `slide-${propertyButtonDirection}-enter`,
//         enterActive: `slide-${propertyButtonDirection}-active-enter`,
//         exit: `slide-${propertyButtonDirection}-exit`,
//         exitActive: `slide-${propertyButtonDirection}-active-exit`,
//       }
//     }

//   }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex],
      transitionClass: 'slide-left'
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex],
      transitionClass: 'slide-right'
    })
  }

  render() {
    const {appearHome, property, transitionClass} = this.state;
    return (
      <div className="App">
        <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="slide-left"
        >
          <Home property={property} transitionClass={transitionClass} />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
