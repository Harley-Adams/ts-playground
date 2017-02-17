import * as React from "react";
import * as ReactDOM from 'react-dom';
import {PrimaryButton} from 'office-ui-fabric-react';
import MoreOptionsMenu from './MoreOptionsMenu';

class AppBar extends React.Component<void, void> {


    render() {
        return  <div className="AppBar">
                    <div className="homeButtonWrapper">
                        <PrimaryButton className="home-mainbutton" href="https://www.sway.com"> Home </PrimaryButton>
                    </div>
                    <div className="farButtonsWrapper">
                        <MoreOptionsMenu> </MoreOptionsMenu>
                    </div>
                </div>
    }

}

export default AppBar;