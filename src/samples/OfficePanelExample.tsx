import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Panel, Button, PanelType } from 'office-ui-fabric-react';

export default class OfficePanelExample extends React.Component<any, any> {

  constructor() {
    super();
    this.state = {
      showPanel: false
    };
  }

  /*public render() {
    return (
      <div>
        <Button description='Opens the Sample Panel' onClick={ this._showPanel.bind(this) }>Open Panel</Button>
        <Panel
          isOpen={ this.state.showPanel }
          isLightDismiss={ true }
          onDismiss={ this._closePanel.bind(this) }
          headerText='Light Dismiss Panel'
        >
          <span className='ms-font-m'>Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints.</span>
        </Panel>
      </div>
    );
  }*/

  public render() {
    return (
      <div>
        <Button description='Opens the Sample Panel' onClick={ this._showPanel.bind(this) }>Open Panel</Button>
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.smallFixedFar }
          onDismiss={ this._closePanel.bind(this) }
          headerText='Panel - Small, right-aligned, fixed'
        >
          <span className='ms-font-m'>Content goes here fucuucucu.</span>
        </Panel>
      </div>
    );
  }

  private _showPanel() {
    this.setState({ showPanel: true });
  }
  private _closePanel() {
    this.setState({ showPanel: false });
  }
}
