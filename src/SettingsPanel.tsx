import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Panel, Button } from 'office-ui-fabric-react';

interface SettingsPanelProps
{
  open: boolean
  toggleShowSettingsPane: () => void
}

export default class SettingsPanel extends React.Component<SettingsPanelProps, void> {
  public render() {
    return (
      <div>
        <Panel
          isOpen={ this.props.open }
          isLightDismiss={ true }
          onDismiss={ this.props.toggleShowSettingsPane.bind(this) }
          headerText='Light Dismiss Panel'
        >
          <span className='ms-font-m'>Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints.</span>
        </Panel>
      </div>
    );
  }
}