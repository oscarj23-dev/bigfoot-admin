import React from 'react';
import './style.css';

export function FeedbackForm({  }) {
    return (

        <div>
        <section className = "homepage-container">

        <h1>
                No responses yet! Check back later!
            </h1>
            <div className = "image-container"> 
                <img src={process.env.PUBLIC_URL + '/img/colville-seal.jpg'} alt="Colville Seal" /> 
            </div>
        </section>
        </div>
    );
}