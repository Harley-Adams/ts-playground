import * as React from "react";
import * as ReactDOM from 'react-dom';
import AppBar from "./AppBar";
import Hello from "./Hello";
import SettingsPanel from "./SettingsPanel"
import { PrimaryButton, MessageBar, MessageBarType, Link } from 'office-ui-fabric-react';
import OfficePanelExample from "./samples/OfficePanelExample";
import OfficeDialogExample from "./samples/OfficeDialogExample";
import { observable, computed } from 'mobx';
interface HomePageState{
    settingsPaneOpen: boolean
}

class HomePage extends React.Component<{}, HomePageState> {
  
  constructor() {
    super();
    this.state = {
        settingsPaneOpen: false
    }
  }

  @observable isSettingsPanelOpen: boolean;

  @computed
  isSettingsPaneOpen(): boolean{
    return this.isSettingsPanelOpen
  }

  toggleShowSettingsPane()
  {
      console.log("HomePage");
      this.setState({
        settingsPaneOpen: !this.state.settingsPaneOpen
      });
  }

  render() {
    return  <div>
                <AppBar />
                <div className="content">
                    <OfficeDialogExample />
                    <OfficePanelExample />
                    <Hello name="Harley"/>
                </div>
            </div>;
  }
}

export default HomePage;