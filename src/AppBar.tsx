import * as React from "react";
import * as ReactDOM from 'react-dom';
import {PrimaryButton} from 'office-ui-fabric-react';

class AppBar extends React.Component<void, void> {


    render() {
        return  <div className="AppBar">
                    <div className="homeButtonWrapper">
                        <PrimaryButton className="home-mainbutton"> Home </PrimaryButton>
                    </div>
                </div>
    }

}

export default AppBar;