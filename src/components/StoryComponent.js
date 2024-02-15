import React from 'react';

const StoryComponent = () => {
    return (
        <div className="story-container grid md:grid-cols-2">
            <div className="left-section">
                <h2 className="story-heading">Our Story</h2>
                <h1 className="welcome-heading">Welcome to Royal</h1>
                <p className="welcome-text">of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                <p  className="welcome-text mt-2">of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
            </div>
            <div className="right-section">
               <img src="https://media.istockphoto.com/id/168400647/photo/fruit-and-vegetables-basket.jpg?s=612x612&w=0&k=20&c=2n1Zys2s7qXRVU_hfAuRZtkFUnDdxHCIqZS2xKIN1Gc=" alt="fruit-and-vegetables-basket" />
            </div>
        </div>
    );
}

export default StoryComponent;
