import React from 'react';

import './styles.css';

function Comment({ data }) {
  return (
    <li>
      <div className="comment-container">
        <img src={data.author.avatar} alt="Avatar"/>
        <div className="content-container">       
          <p>
            <strong>{data.author.name}</strong>
            {data.content}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Comment;