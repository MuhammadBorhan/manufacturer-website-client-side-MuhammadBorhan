import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import NewsFeed from './NewsFeed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;