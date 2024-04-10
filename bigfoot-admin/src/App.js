import React from 'react';
import './style.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Posts } from "./Posts"
import { PostsAddPost } from "./PostsAddPost"

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="posts" element={<Posts />} />
      </Routes> */}
      {/* <Posts/> */}
      <PostsAddPost/>
    </div>
  );
}

export default App;
