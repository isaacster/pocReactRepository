import React from "react";

const UpdateComp = OriginalComp => {

    class NewComp extends React.Component {
        render() {
            return <div> isaac rox < OriginalComp name="The user" /> y sux </div>
        }
    }


    return NewComp;

}

export default UpdateComp;