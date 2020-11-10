import React from 'react';
import Slider from './Slider';
import { Col } from 'shards-react';
import './Blog.css'

function Blog() {
  return (
    <React.Fragment>
        <div className="title-block">
            <h1 className="Blog-Block">Blog</h1>
        </div>
        <div className="blog-holder">
            <Slider />
        </div>
    </React.Fragment>
  );
}

export default Blog;