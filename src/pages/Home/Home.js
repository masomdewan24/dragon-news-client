import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../NewsSummary/NewsSummary';

const Home = () => {
    const AllNews = useLoaderData()
    
    return (
        <div>
            <h2>This is Home components total news: {AllNews.length} </h2>
            {
                AllNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                >

                </NewsSummary>)
            }

        </div>
    );
};

export default Home;