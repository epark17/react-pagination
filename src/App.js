import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  /*
  // equivalent to:
  state = {
    posts: [],
  };
  */
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Making the Request - runs when component mounts AND also runs whenever component updates
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/posts'
      );
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
    // with just this, will be in a never ending loop
    // vvv to stop that, pass in set of brackets
    // for this project, will keep [] empty and will mimic componentDidMount lifecycle
  }, []);

  return (
    <div className="container">
      <h1>My App</h1>
    </div>
  );
};

export default App;
