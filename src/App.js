import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Post } from "./Components/Post/index.js";
import { Comment } from "./Components/Comment/index.js";
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
  getPosts(posts, comments) {
    return posts.map(post => (
      <div>
        <Post {...post} />
        {comments &&
          comments
            .filter(co => co.postId === post.id)
            .map(comment => <Comment {...comment} />)}
      </div>
    ));
  }
  render() {
    const { posts, comments } = this.props;
    console.log(comments);
    return (
      <div className="App">
        <Container>{this.getPosts(posts, comments)}</Container>
      </div>
    );
  }
}
export const mapStateToProps = ({ appReducer }) => {
  return {
    posts: appReducer.posts,
    comments: appReducer.comments
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
