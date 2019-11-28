import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Post } from "./Components/Post/index.js";
import * as appActions from "./actions";
import { bindActionCreators } from "redux";
import PostService from "./services/postService";
import { Container } from "react-bootstrap";

class App extends React.Component {
  componentDidMount() {
    const postService = new PostService();

    postService
      .getAllPosts()
      .then(posts => this.props.actions.getPostsSuccess({ posts }));
    postService
      .getAllComments()
      .then(comments => this.props.actions.getCommentsSuccess({ comments }));
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <Container>{getPosts(posts)}</Container>
      </div>
    );
  }
}
export const mapStateToProps = ({ appReducer }) => {
  return {
    posts: appReducer.posts
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
function getPosts(posts) {
  return posts.map(post => <Post title={post.title} body={post.body}></Post>);
}
