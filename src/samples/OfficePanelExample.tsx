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

  public render() {
    return (
      <div>
        <Button description='Opens the Sample Panel' onClick={ this._showPanel.bind(this) }>Open Panel</Button>
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.extraLarge }
          onDismiss={ this._closePanel.bind(this) }
          headerText='Panel - Small, right-aligned, fixed'
          closeButtonAriaLabel='Close'
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
