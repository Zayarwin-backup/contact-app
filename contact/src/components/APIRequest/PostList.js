import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts1"
      )
      .then((respone) => {
        console.log(respone);
        this.setState({ posts: respone.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Something went wrong",
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of Posts</h1>
        {errorMsg ? <div>{errorMsg}</div> : null}
        {posts.length
          ? this.state.posts.map((post) => (
              <div key={post.id}>
                {post.title}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default PostList;
