import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './homepage';
import { PostsAddPost } from './PostsAddPost';
import { FeedbackForm } from './feedbackform';

function App() {
  const [postHistory, setPostHistory] = useState([]);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-post">New Post</Link></li>
          <li><Link to="/post-history">Post History</Link></li>
          <li><Link to="/feedback">Feedback Form Responses</Link></li>
          <li><Link to="/sos-announcment">Emergency Announcment</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/new-post" element={<PostsAddPost postHistory={postHistory} setPostHistory={setPostHistory} />} />
        <Route path="/" element={<HomePage postHistory={postHistory} />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>

    </div>
  );
}

export default App;
