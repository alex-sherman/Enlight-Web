import React from "react";
import { AcceptCancelButtons } from "components/UI";
import "./Form.scss";

interface Props {
  submitBtnTitle?: string;
  cancelBtnTitle?: string;
  clearAfterSubmit?: boolean;
  className?: string;
  onSubmit?(form: { [s: string]: any }): void;
  onCancel?: any;
  onChange?(form: { [s: string]: any }): void;
  onlyChanged?: boolean;
  values?: {};
  defaults?: { [s: string]: any };
}

export class Form extends React.Component<Props, { [s: string]: any }> {
  state = {} as { [s: string]: any };
  dead = false;

  componentWillUnmount = () => {
    this.dead = true;
  };

  handlePressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      this.submitForm();
    }
  };

  submitForm = async () => {
    if (this.props.onSubmit) await this.props.onSubmit(this.form());
    if (!this.dead && this.props.clearAfterSubmit) {
      Object.entries(this.state).map(([key, _]) => delete this.state[key]);
      this.forceUpdate();
    }
  };

  cancelHandler = () => {
    Object.entries(this.state).map(([key, _]) => delete this.state[key]);
    this.forceUpdate();
    if (this.props.onCancel) this.props.onCancel();
  };

  form = (includeDefaults?: boolean) => {
    let form = { ...this.props.values, ...this.state };
    if (includeDefaults || !this.props.onlyChanged) form = { ...this.props.defaults, ...form };
    return form;
  };

  attach = (name: string, onChange?: (v: any) => any, renderedValue?: (v: any) => any) => {
    const _onChange = (value: any) => {
      const newValue = onChange && onChange(value);
      value = newValue === undefined ? value : newValue;
      this.setState(
        { [name]: value },
        () => this.props.onChange && this.props.onChange(this.state)
      );
    };
    const defaults = this.props.defaults || {};
    let value = this.state[name];
    if (value === undefined) value = defaults[name];
    if (value === undefined) value = "";
    if (renderedValue) value = renderedValue(value);
    return { onChange: _onChange, name, value };
  };

  render() {
    const { submitBtnTitle, cancelBtnTitle, className, onlyChanged } = this.props;
    return (
      <div className={className} onKeyPress={this.handlePressEnter}>
        {typeof this.props.children === "function" &&
          (this.props.children as any)({ attach: this.attach, value: this.form(true) })}
        {React.Children.map(this.props.children, (child) => {
          if (!React.isValidElement(child)) return;
          return <child.type {...child.props} {...this.attach((child.props as any).id)} />;
        })}
        {(!onlyChanged || Object.entries(this.state).length > 0) && (
          <AcceptCancelButtons
            onAccept={this.submitForm}
            onCancel={this.cancelHandler}
            acceptTitle={submitBtnTitle}
            cancelTitle={cancelBtnTitle}
          />
        )}
      </div>
    );
  }
}

export default Form;
