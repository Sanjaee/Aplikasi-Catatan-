import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleCharCount: 50,
    };

    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  ontitleChangeEventHandler(event) {
    const inputText = event.target.value;
    if (inputText.length <= 50) {
      this.setState(() => {
        return {
          title: inputText,
          titleCharCount: 50 - inputText.length,
        };
      });
    }
  }

  onbodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);

    this.setState({
      title: "",
      body: "",
      titleCharCount: 50,
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div className="note-input__title__char-limit">
          {this.state.titleCharCount} karakter tersisa
        </div>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.title}
          onChange={this.ontitleChangeEventHandler}
        />

        <textarea
          className="note-input__body"
          type="text"
          placeholder="Body"
          value={this.state.body}
          onChange={this.onbodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default Input;
