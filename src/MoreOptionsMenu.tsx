import * as React from "react";
import * as ReactDOM from 'react-dom';
import {PrimaryButton, ContextualMenu, DirectionalHint, Button} from 'office-ui-fabric-react';

export default class MoreOptionsMenu extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      isContextMenuVisible: false
    };
    this._onClick = this._onClick.bind(this);
    this._onDismiss = this._onDismiss.bind(this);
  }

  contextButton: HTMLElement;
  
  public render() {
    return (
      <div>
        <Button 
          onClick={ this._onClick } id='ContextualMenuButton1' 
          ref={ (ref:React.ReactInstance) => this.contextButton = ReactDOM.findDOMNode(ref) as HTMLElement }
          className="MoreOptionsButton"> 
          More Options 
        </Button>
        { this.state.isContextMenuVisible ? (
          <ContextualMenu
            shouldFocusOnMount={ true }
            target={ this.contextButton }
            onDismiss={ this._onDismiss }
            directionalHint={ DirectionalHint.bottomRightEdge }
            directionalHintFixed={true}
            items={
              [
                {
                  key: 'Actions',
                  itemType: 2,
                  name: 'Actions'
                },
                {
                  key: 'upload',
                  iconProps: {
                    iconName: 'Upload',
                    style: {
                      color: 'salmon'
                    }
                  },
                  name: 'Upload',
                  title: 'Upload a file'
                },
                {
                  key: 'rename',
                  name: 'Rename'
                },
                {
                  key: 'share',
                  iconProps: {
                    iconName: 'Share'
                  },
                  subMenuProps: {
                    items: [
                      {
                        key: 'sharetoemail',
                        name: 'Share to Email',
                        iconProps: {
                          iconName: 'Mail'
                        },
                      },
                      {
                        key: 'sharetofacebook',
                        name: 'Share to Facebook',
                      },
                      {
                        key: 'sharetotwitter',
                        name: 'Share to Twitter',
                        iconProps: {
                          iconName: 'Share'
                        },
                      },
                    ],
                  },
                  name: 'Sharing'
                },
                {
                  key: 'navigation',
                  itemType: 2,
                  name: 'Navigation'
                },
                {
                  key: 'properties',
                  name: 'Properties'
                },
                {
                  key: 'print',
                  iconProps: {
                    iconName: 'Print'
                  },
                  name: 'Print'
                },

                {
                  key: 'Bing',
                  name: 'Go to Bing',
                  href: 'http://www.bing.com'
                },
              ]
            }
          />) : (null) }
      </div>
    );
  }

  private _onClick(event: React.MouseEvent<any>) {
    this.setState({ isContextMenuVisible: true });
  }

  private _onDismiss(event: any) {
    this.setState({ isContextMenuVisible: false });
  }
}