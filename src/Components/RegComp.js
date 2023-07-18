import React, { Component } from 'react'

class RegComp extends Component {
    render() {

        console.log("reg comp");
        return (

            <div>
                i'm the Reg Comp   {this.props.name}
            </div>

        )

    }

}

export default RegComp