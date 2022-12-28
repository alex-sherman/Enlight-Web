import { Button } from "components/UI/Button";
import { AppProps } from "index";
import React from "react";

export default class AButton extends React.Component<
  AppProps & { name?: string; path: string; arg: any },
  {}
> {
  onClick = () => {
    this.props.actionFetch("mrpc", "CALL", { dst: this.props.path, value: this.props.arg });
  };
  render = () => {
    return (
      <div className="item">
        <div className="center">{this.props.name || this.props.path.split(".")[0]}</div>
        <Button onClick={this.onClick} />
      </div>
    );
  };
}
