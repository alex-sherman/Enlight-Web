import React from "react";
import AToggle from "components/UI/Automation/AToggle";
import { AppProps } from "index";
import { Card } from "components/UI/Automation/Card";
import AButton from "components/UI/Automation/AButton";

interface Props {
  actionFetch(
    type: string,
    action: string,
    queryParams?: { email?: string; password?: string },
    errorHandler?: any
  ): any;
}
interface State {}

export class Home extends React.Component<Props & AppProps, State> {
  render() {
    return (
      <div>
        <div id="page-wrapper">
          <Card>
            <AToggle name="Living Room" path="LivingRoom.light" {...this.props}></AToggle>
            <AToggle path="Dining.light" {...this.props}></AToggle>
            <AToggle path="Nook.light" {...this.props}></AToggle>
          </Card>
          <Card>
            <AButton name="TV: On" path="TV.irsend" arg={"on"} {...this.props}></AButton>
            <AButton name="TV: Input" path="TV.irsend" arg={"input"} {...this.props}></AButton>
            <AButton path="TV.irsend" arg={"ok"} {...this.props}>TV: Ok</AButton>
          </Card>
          <Card>
            <AToggle path="Bedroom.light" {...this.props}></AToggle>
            <AToggle path="Extension.light" {...this.props}></AToggle>
            <AToggle path="Office.light" {...this.props}></AToggle>
            <AButton path="OfficeMain.light" arg={true} {...this.props}>Office Main</AButton>
          </Card>
          <Card>
            <AButton path="Garage.open" {...this.props}>Garage</AButton>
          </Card>
        </div>
      </div>
    );
  }
}
