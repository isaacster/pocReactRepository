import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {

        console.log("paent comp");
        return (

            <div>

 
                i'm the pure compoonent, i'll not render if the state ==, i m optimized  {this.props.name}

            </div>

        )
 
    }
 
}

export default PureComp