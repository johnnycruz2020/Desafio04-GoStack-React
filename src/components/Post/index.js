import React from 'react';

import './styles.css';

import Comment from '../Comment';

function Post({ data }) {
  return (
    <li>
      <div className="post-container">
        <div className="post-author">
          <img src={data.author.avatar} alt="Avatar"/>
          <div className="author-title">
            <h1>{data.author.name}</h1>
            <span>{data.date}</span>
          </div>
        </div>
        <p>{data.content}</p>
        <ul>
          {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </ul>
      </div>
    </li>
  );
}

export default Post;