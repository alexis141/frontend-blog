import React, { useState } from 'react';

import "../style/create.css";

const CreatePost = () => {
  const [newBlog, setNewBlog] = useState(''); 
  const [blogs, setBlogs] = useState(localStorage.getItem("Blogs") ? localStorage.getItem("Blogs").split(","): []); 
  console.log("reload");
  console.log(blogs);
  const addBlog = () => {
    if (newBlog.trim()) {
      setBlogs([...blogs, newBlog]); 
      let updateBlogs= blogs.push(newBlog)
      console.log("update blogs", blogs)
      localStorage.setItem("Blogs", blogs)
      setNewBlog(''); 
      console.log(typeof(blogs));
    }
  };

  const deleteBlog = (idx) => {
    console.log(idx);
    blogs.splice(idx, 1);
    setBlogs([...blogs]); 
    localStorage.setItem("Blogs", blogs);

  }

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
        {blogs.slice().reverse().map((blog, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
             {/* <h3> Blog {index+1}</h3> */}
             <hr style={{margin: '0% 30% 20px 30%'}}></hr>
             {blog}
             <br></br>
             <button onClick={() => deleteBlog(index)} className="delete-blog-button"> DELETE </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreatePost;
