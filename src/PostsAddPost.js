import React, { useState } from 'react';
import './style.css';
import { PostCard } from './PostCard';
// import { NavLink } from 'react-router-dom';

// function PostCard({ post }) {
//     return (
//         <div className="card mb-4">
//         <div className="card-body">
//             <h2 className="post-title">{post.title}</h2>
//             <h3>{post.type}</h3>
//             <p>{post.description}</p>
//             <div className="post-history-buttons">
//                 <a href="#" className="btn btn-secondary">Edit</a>
//                 <a href="#" className="btn btn-danger">Delete</a>
//             </div>
//         </div>
//     </div>
//     );
// }

export function PostsAddPost() {
    const [showPostForm, setShowPostForm] = useState(false);
    const [postHistory, setPostHistory] = useState([])

    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    // state variable for success message 
    const [postCreated, setPostCreated] = useState(false); 

    const handleAddPostBtn = () => {
        setShowPostForm(!showPostForm);
        // reset success message 
        setPostCreated(false);

        if (!showPostForm) {
            setTitleValue('');
            setDescValue('');
            setSelectedValue('');
        };
    }

    const addPostCard = (postTitle, postDesc, postType) => {
        const newPost = {
            "title": postTitle,
            "description": postDesc,
            "type": postType
        }

        const newPostCards = [...postHistory, newPost];
        setPostHistory(newPostCards);
        setPostCreated(true)
    }


    const handleTitleChange = (event) => {
        event.preventDefault();
        const titleInput = event.target.value;
        setTitleValue(titleInput);
    }

    const handleDescChange = (event) => {
        event.preventDefault();
        const descInput = event.target.value;
        setDescValue(descInput);
    }

    const handleSelectedValueChange = (event) => {
        event.preventDefault();
        const selectInput = event.target.value;
        setSelectedValue(selectInput);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addPostCard(titleValue, descValue, selectedValue);
        console.log(postHistory);
    }





    return (
        <div>
            {/* insert navbar section here */}
            <section>
                <h1>
                    Your Posts
                </h1>

                <section className="post-button">
                    <button className="btn btn-dark" type="button" onClick={handleAddPostBtn}>{showPostForm ? 'Cancel' : 'Create New Post'}</button>
                </section>
                {showPostForm && (
                    <div>
                        <form className="new-post" onSubmit={handleSubmit}>
                            <h2>Create New Post</h2>
                            <div className="all-post-elements">

                                <div className="main-post-element-container">
                                    <div className="post-creation-field">
                                        <label for="title">Title:</label>
                                        <input id="title" placeholder="-- Add a title --" type="text"
                                            name="title" value={titleValue} onChange={handleTitleChange} required />
                                    </div>

                                    <div className="post-creation-field">
                                        <label for="description">Description:</label>
                                        <textarea id="description" placeholder="-- Add a description --" value={descValue} onChange={handleDescChange} required></textarea>
                                    </div>
                                </div>

                                <div className="other-post-element-container">
                                    <div className="post-creation-field">
                                        <div className="select-field">
                                            <label for="type">Post Type:</label> <select value={selectedValue} onChange={handleSelectedValueChange}>
                                                <option value="None">-- Select --</option>
                                                <option value="Calendar Event">Calendar Event</option>
                                                <option value="News">News</option>
                                                <option value="Resources">Resource</option>
                                                <option value="Elder Resource">Elder Resource</option>
                                                <option value="Tribal Government">Tribal Government</option>
                                                <option value="Public Health Support">Public Health Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="add-post-btns">
                                        <button className="btn btn-dark" type="submit">Publish</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                )}

            </section>
            { postCreated && (
                <div className="alert alert-success">
                Post created successfully!
                <button type="button" className="close" onClick={() => setPostCreated(false)}>
                    <span>&times;</span>
                </button>
            </div>
            )}

            <section>
                <div className="all-post-history">
                    {postHistory.map((post, index) => (<PostCard key={index} post={post}/>))}
                    
                </div>
            </section >
        </div >
    );
}

