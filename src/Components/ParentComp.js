import React, { Component } from 'react'
import PureComp from "./PureComp"
import RegComp from "./RegComp"

class ParentComp extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: "simplilearn prt cstrct"
        }
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({ name: "simplilearn setState" })
        }, 3000);

    }

    render() {

        console.log("paent comp");

        return (

            <div>
                i'm the ParentComp
                <RegComp name={this.state.name} ></RegComp>

                <PureComp name={this.state.name} ></PureComp>

            </div>

        )

    }

}

export default ParentComp