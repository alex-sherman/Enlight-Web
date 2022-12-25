import React from "react";
import DataSource from "components/DataSource";
import AToggle from "components/UI/Automation/AToggle";
import { AppProps } from "index";

import { Card } from "components/UI/Automation/Card";

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
    // const { actionFetch } = this.props;
    return (
      <div>
        <div id="page-wrapper">
          <Card>
            <AToggle path="LivingRoom.light" {...this.props}></AToggle>
            <AToggle path="Dining.light" {...this.props}></AToggle>
            <AToggle path="Nook.light" {...this.props}></AToggle>
            <AToggle path="Extension.light" {...this.props}></AToggle>
          </Card>
          <Card>
            <AToggle path="Office.light" {...this.props}></AToggle>
          </Card>
        </div>
      </div>
      // <DataSource dataSource={async () => await actionFetch("users", "CURRENT")}>
      //   {({ data: user }: { data: any }) => (
      //   )}
      // </DataSource>
    );
  }
}
