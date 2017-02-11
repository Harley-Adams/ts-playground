import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from "./Hello";
import { Button, MessageBar, MessageBarType } from 'office-ui-fabric-react';

interface HomeProps {
  name?: string;
}

class HomePage extends React.Component<HomeProps, {}> {
  render() {
    return  <div>
                <Hello name="Harley"/>
            </div>;
  }
}

export default HomePage;
