import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { PostCard } from './PostCard';

export function HomePage({ postHistory }) {
    return (
        <div>
            {/* insert navbar section here */}
            <section className = "homepage-container">
                <h1>Welcome to the Colville Community Application Admin Homepage</h1>

                <p> 
                    Save this section for a description of the admin homepage.
                </p>

                {/* inserting colville seal */}
                <div className = "image-container"> 
                    <img src={process.env.PUBLIC_URL + '/img/colville-seal.jpg'} alt="Colville Seal" /> 
                </div>
    
                <section className="post-button">
                    <Link to="/new-post" className="btn btn-dark">Create New Post</Link>
                </section>

                {postHistory.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </section>
        </div>
    );
}
