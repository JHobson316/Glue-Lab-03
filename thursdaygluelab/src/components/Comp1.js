import React, { Component } from 'react'

export class Comp1 extends Component {
    construsctor(props){
        super(props)
        this.state = {
            isEnabled: true,
        }
    }
    enableButton = () => {
        this.setState({isEnabled: true})
    }
    disableButton = () => {
        this.setState({isEnabled: false})
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Comp1
