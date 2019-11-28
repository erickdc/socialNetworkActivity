import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from "../Input/index";
import * as appActions from "../../actions";

class CommentField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  handleKeyDown = e => {
    const { postId, actions } = this.props;
    if (e.key === "Enter") {
      actions.addComment({
        postId: postId,
        id: Math.random()
          .toString(36)
          .substring(2, 15),
        name: "Logged User",
        email: "random@random.com",
        body: this.state.comment
      });
      this.setState({
        comment: ""
      });
    }
  };
  render() {
    return (
      <Input
        controlId="formComment"
        name="comment"
        type="text"
        placeholder="Write an answer"
        handleKeyDown={this.handleKeyDown}
        handleChange={this.handleChange}
      ></Input>
    );
  }
}
export const mapStateToProps = state => {
  return {};
};
export const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      ...appActions
    },
    dispatch
  );
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentField);
