import React from 'react';
import './style.css';

export function PostCard({ post }) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="post-title">{post.title}</h2>
                <h3>{post.type}</h3>
                <p>{post.description}</p>
                <div className="post-history-buttons">
                    <a href="#" className="btn btn-secondary">Edit</a>
                    <a href="#" className="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
    );
}
