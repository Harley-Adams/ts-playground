import * as React from "react";
import * as ReactDOM from 'react-dom';
import {PrimaryButton, Link} from 'office-ui-fabric-react';
import MoreOptionsMenu from './MoreOptionsMenu';

class AppBar extends React.Component<void, void> {

    render() {
        return  <div className="AppBar">
                    <div className="homeButtonWrapper">
                        <a className="homeLink" href="https://www.sway.com"> <span className="homeText">Home </span> </a>
                    </div>
                    <div className="farButtonsWrapper">
                        <MoreOptionsMenu> </MoreOptionsMenu>
                    </div>
                </div>
    }

}

export default AppBar;