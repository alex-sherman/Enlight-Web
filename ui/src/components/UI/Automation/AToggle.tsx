import { AppProps } from "index";
import React from "react";

export default class AToggle extends React.Component<
  AppProps & { path: string },
  { value: boolean; loaded: boolean }
> {
  state = { value: false, loaded: false };
  componentDidMount(): void {
    this.refreshValue();
  }
  refreshValue = async () => {
    let responses = (await this.props.actionFetch("mrpc", "CALL", {
      dst: this.props.path,
    })) as Array<{ result: boolean }>;
    this.setState({
      loaded: true,
      value: responses.reduce((prev, value) => prev || value.result, Boolean(false)),
    });
    console.log(responses);
  };
  onClick = () => {
    this.props.actionFetch("mrpc", "CALL", { dst: this.props.path, value: !this.state.value });
    this.setState({ value: !this.state.value });
  };
  render = () => {
    return (
      <div className="section">
        <div className="center">{this.props.path.split(".")[0]}</div>
        <div className="switch center">
          <input
            type="checkbox"
            checked={this.state.value}
            readOnly
            disabled={!this.state.loaded}
          />
          <span className="slider" onClick={this.onClick}></span>
        </div>
      </div>
    );
  };
}
