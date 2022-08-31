import React, { Component } from 'react'

class AnotherComponent extends Component {

    render() {
        console.log(this.props)
        console.log(this.props.person.name)

        const {name} = this.props.person
        const {favFood} = this.props.person

        const x = 5;
        return (
            <fieldset>
                <legend>AnotherComponent.jsx</legend>
                <div>hello {name}, you like {favFood}</div>
                <p>
                    x is {this.props.x}
                </p>
            </fieldset>
        )
    }
}

export default AnotherComponent;