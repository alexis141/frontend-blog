import React, { useState } from 'react';

const CreatePost = () => {
  const [newBlog, setNewBlog] = useState(''); 
  const [blogs, setBlogs] = useState([]); 

  const addBlog = () => {
    if (newBlog.trim()) {
      setBlogs([...blogs, newBlog]); 
      setNewBlog(''); 
    }
  };

  return (
    <section className="blog-posts-section">
      <h2>Blog Posts</h2>
      <div className="blog-input-container">
        <input
          type="text"
          value={newBlog}
          onChange={(e) => setNewBlog(e.target.value)}
          placeholder="Write your blog title here..."
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={addBlog} className="add-blog-button">
          Add Blog
        </button>
      </div>
      <ul className="blog-list">
        {blogs.map((blog, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {blog}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreatePost;
