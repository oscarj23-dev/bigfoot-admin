import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './homepage';
import { PostsAddPost } from './PostsAddPost';

function App() {
  const [postHistory, setPostHistory] = useState([]);

  return (
    <div> 
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-post">New Post</Link></li>
              <li><Link to="/feedback">Feedback Form Responses</Link></li>
            </ul>
        </nav>

      <Routes>
          <Route path="/new-post" element={<PostsAddPost postHistory={postHistory} setPostHistory={setPostHistory} />} />
          <Route path="/" element={<HomePage postHistory={postHistory} />} />
      </Routes>
    
    </div>
  );
}

export default App;
