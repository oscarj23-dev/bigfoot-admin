import React, { useState } from 'react';
import './style.css';
import { PostList } from './create-post'

// displays the additions of new posts made in the create post page
// handles delete events when delete button is clicked
export function PostHistory({postHistory, setPostHistory}) {
    const handleDelete = (title, description, type) => {
        setPostHistory((beforeDelete) => {
            let indexToDelete = beforeDelete.findIndex((post) => post.description === description && post.title === title && post.type === type);
            if (indexToDelete != -1) {
                return [...beforeDelete.slice(0, indexToDelete), ...beforeDelete.slice(indexToDelete + 1)]
            }
        });
    }

    return (
        <div>
            <div className="all-post-history">
                {postHistory.length > 0 ? (<PostList posts={postHistory} handleDelete={handleDelete} />) : (<p>Your post history is empty.</p>)}
            </div>

        </div>
    );
}