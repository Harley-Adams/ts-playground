import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Panel, Button, PanelType } from 'office-ui-fabric-react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class OfficePanelExample extends React.Component<any, any> {

  @observable isPanelShown = false;

  @computed get isPanelOpen() {
    return this.isPanelShown;
  }

  public render() {
    return (
      <div>
        <Button description='Opens the Sample Panel' onClick={ this.showPanel }>Open Panel</Button>
        <Panel
          isOpen={ this.isPanelShown }
          type={ PanelType.extraLarge }
          hasCloseButton={true}
          onDismiss={ this.closePanel }
          isLightDismiss={true}
          headerText='Panel - Small, right-aligned, fixed'
          closeButtonAriaLabel='Close'
        >
          <span className='ms-font-m'>Content goes here fucuucucu.</span>
        </Panel>
      </div>
    );
  }

  private showPanel = () => {
    this.isPanelShown = true;
  }

  private closePanel = () => {
    this.isPanelShown = false;
  }
}
