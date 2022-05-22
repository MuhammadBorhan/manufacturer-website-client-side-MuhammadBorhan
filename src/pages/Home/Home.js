import React from 'react';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import NewsFeed from './NewsFeed';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <ChooseUs></ChooseUs>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;