import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";

function FetchingWithUS() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/1"
      )
      .then((response) => {
        setLoading(false);
        setError("");
        setPosts(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong!");
        setPosts({});
      });
  });
  return (
    <div>
      {loading ? "Loading" : ""}
      {posts.title}
      {error ? error : ""}
    </div>
  );
}

export default FetchingWithUS;
