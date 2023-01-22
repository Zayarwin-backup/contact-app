import React, {
  useReducer,
  useEffect,
} from "react";
import axios from "axios";

const intitalState = {
  loading: true,
  error: "",
  posts: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "fail":
      return {
        loading: false,
        error: "something went wrong!",
        posts: {},
      };
    default:
      return state;
  }
};

function FetchingWithUR() {
  const [state, dispatch] = useReducer(
    reducer,
    intitalState
  );
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/1"
      )
      .then((response) => {
        dispatch({
          type: "Success",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "fail" });
      });
  });
  return (
    <div>
      {state.loading ? "Loading" : ""}
      {state.posts.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchingWithUR;
