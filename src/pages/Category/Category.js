import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../NewsSummary/NewsSummary';

const Category = () => {
    const categoryNews = useLoaderData();
   
    return (
        <div>
            <h2>Thsi is Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => 
                    <NewsSummary
                        key={categoryNews.id}
                        news={news}
                    ></NewsSummary>
                    )
            }
        </div>
    );
};

export default Category;