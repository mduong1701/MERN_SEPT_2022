import React, { Component } from 'react'
import SubComponent from './SubComponent';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ben : this.props.num,
            bob: 6,
            person: this.props.person,
            alice: "hello",
        }
    }

    hi() {
        // console.log("hello!!!!! from function");
        this.setState({
            person: {
                ...this.state.person,
                age: this.state.person.age + 1,
            }
        }, () => console.log(this.state.person.age))
        // console.log(this.state.person.age);
    }

  render() {
    // console.log(this.props.num)
    return (
      <fieldset>
        <legend>ClassComponent</legend>
        <p className='brb'>
            what is state? <br />
            {JSON.stringify(this.state)}
        </p>
        <hr />
        person object age:
        {this.state.person.age} <br />
        <button onClick={ () => {this.hi()} }>click me</button>
        <SubComponent/>
      </fieldset>
    )
  }
}

export default ClassComponent;