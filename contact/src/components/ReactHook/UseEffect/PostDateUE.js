import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";

function PostDateUE() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const added = (e) => {
    e.preventDefault();
    if (
      id === "" ||
      title === "" ||
      body === ""
    ) {
      alert("All input field are required!");
      return;
    }
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        { id, title, body }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={added}>
        <input
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          type='text'
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        ></input>
        <input
          type='text'
          value={body}
          onChange={(e) =>
            setBody(e.target.value)
          }
        ></input>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default PostDateUE;
