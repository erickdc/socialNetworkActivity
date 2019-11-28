import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Post } from "./Components/Post/index.js";
import * as appActions from "./actions";
import { bindActionCreators } from "redux";
import PostService from "./services/postService";

class App extends React.Component {
  componentDidMount() {
    new PostService()
      .getAllPosts()
      .then(posts => this.props.actions.getPostsSuccess({ posts }));
  }
  render() {
    const { posts } = this.props;
    console.log(posts);
    return <div className="App">{getPosts(posts)}</div>;
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
