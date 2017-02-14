import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from "./Hello";
import SettingsPanel from "./SettingsPanel"
import { Button, MessageBar, MessageBarType, Link } from 'office-ui-fabric-react';
import OfficePanelExample from "./samples/OfficePanelExample";

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

  toggleShowSettingsPane()
  {
      console.log("HomePage");
      this.setState({
        settingsPaneOpen: !this.state.settingsPaneOpen
      });
  }

  render() {
    return  <div>
                <OfficePanelExample />
                <Hello name="Harley"/>
                <Button> Test </Button>
            </div>;
  }
}
/*

                <Button description='Opens the Sample Panel' onClick={ this.toggleShowSettingsPane.bind(this) }>Open Panel</Button>
                <SettingsPanel open={this.state.settingsPaneOpen} toggleShowSettingsPane={this.toggleShowSettingsPane}/>

                <MessageBar actions={ <div><Button>Yes</Button><Button>No</Button></div> } messageBarType={ MessageBarType.success } isMultiline={ false }>
                    Success <Link href='www.bing.com'>Visit our website</Link>
                </MessageBar>
*/
export default HomePage;