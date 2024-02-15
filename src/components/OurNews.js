import React from 'react';

const OurNews = () => {
    return (
        <div className="news-container">
            <div className="news-header">
                <h1 className="news-heading">DONT'MISS</h1>
                <h2 className="news-subheading">Our News And Events</h2>
                <p className="news-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero ac libero vehicula,<br/> vel posuere eros tempus.Lorem ipsum dolor sit amet, </p>
            </div>
            <div className="news-grid">
                <div className="news-item ">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="News 1" className="news-image" />
                    <div className='shadow-xl news-deatails'>
                    <h3 className="news-item-heading">News 1</h3>
                    <h4 className="news-item-subheading text-yellow-800">CATEGORY</h4>
                    <p className="news-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum</p>
                    </div>
                   
                </div>
                 <div className="news-item">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="News 2" className="news-image" />
                    <div className='shadow-xl news-deatails'>
                    <h3 className="news-item-heading">News 1</h3>
                    <h4 className="news-item-subheading text-yellow-800">CATEGORY</h4>
                    <p className="news-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="news-item ">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="News 3" className="news-image" />
                    <div className='shadow-xl news-deatails'>
                    <h3 className="news-item-heading">News 1</h3>
                    <h4 className="news-item-subheading text-yellow-800">CATEGORY</h4>
                    <p className="news-item-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>
            <button className='news-btn'>Read More</button>
        </div>
    );
}

export default OurNews;
