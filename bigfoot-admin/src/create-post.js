import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


export function PostsAddPost({postHistory, setPostHistory}) {

    // const [postHistory, setPostHistory] = useState([])

    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    // state variable for success message 
    const [postCreated, setPostCreated] = useState(false); 

    const handleAddPostBtn = () => {
        // reset success message 
        setPostCreated(false);


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

    // const handleSuccessClick = (event) => {
    //     event.preventDefault();

    // }





    return (
        <div>
            <section>
                <h1>
                    New Post
                </h1>
                    <div>
                        <form className="new-post" onSubmit={handleSubmit}>
                            <h2 className="create-post-header">Post Creation Form</h2>
                            <div className="all-post-elements">

                                <div className="main-post-element-container">
                                    <div className="post-creation-field">
                                        <label className="create-post-title-label" htmlFor="title">Title:</label>
                                        <input id="title" placeholder="-- Add a title --" type="text"
                                            name="title" value={titleValue} onChange={handleTitleChange} required />
                                    </div>

                                    <div className="post-creation-field">
                                        <label htmlFor="description">Description:</label>
                                        <textarea id="description" placeholder="-- Add a description --" value={descValue} onChange={handleDescChange} required></textarea>
                                    </div>
                                </div>

                                <div className="other-post-element-container">
                                    <div className="post-creation-field">
                                        <div className="select-field">
                                            <label htmlFor="type">Post Type:</label> <select value={selectedValue} onChange={handleSelectedValueChange} required>
                                                <option value="" disabled hidden>-- Select --</option>
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

            </section>
            { postCreated && (
                <div className="alert alert-success">
                Post created successfully! <br/>
                <NavLink to="/post-history">View in post history</NavLink>
                <button type="button" className="close" onClick={() => setPostCreated(false)}>
                    <span>&times;</span>
                </button>
            </div>
            )}
        </div >
    );
}

export function PostCard({ post, handleDelete }) {

    if (!post) {
        return null;
    }

    return (
        <div className="card mb-4">
        <div className="card-body">
            <h2 className="post-title">{post.title}</h2>
            <h3>{post.type}</h3>
            <p>{post.description}</p>
            <div className="post-history-buttons">
                <a href="#" className="btn btn-danger" onClick={() => handleDelete(post.title, post.description, post.type)}>Delete</a>
            </div>
        </div>
    </div>
    );
}

export function PostList({ posts, handleDelete }) {
    if (!posts || posts.length === 0) {
        return (
            <div>
                <p>Your post history is empty.</p>
            </div>
        );
    }

    const postList = posts.map((post, index) => (
        <PostCard
            post={post}
            handleDelete={handleDelete}
            key={index}
        />
    ));
    return (
        <div className="card-deck">{postList}</div>
    );
}