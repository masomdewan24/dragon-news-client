import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    console.log(category)
    return (
        <div>
            <h2>Thsi is Category has news: {category.length}</h2>
        </div>
    );
};

export default Category;