import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

const PostView = () => {
    const dispatch = useDispatch();
    const { isLoading, error, posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const grid = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px'
    }

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h1>Data fetching using redux/toolkit</h1>
            {isLoading && <h2>Loading...</h2>}
            {error && <p><small style={{ color: 'red' }}>{error}</small></p>}
            <div style={grid}>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostView;