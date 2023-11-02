import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = 'My Blog';
    });
    return(
        <div>
            <p>This is a blog</p>
        </div>
    );
};

export default Blog;