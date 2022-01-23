import React from 'react';

const Suggestion = ({ suggestion, i }) => {
  return (
    <div className="suggestion-user">
      <img alt="profile" src={suggestion.img} className="suggestion-img" />
      <div className="suggestion-info">
        <p className="suggestion-id">{suggestion.userName}</p>
        <p className="suggestion-name">{suggestion.content}</p>
      </div>
      <p className="follow">팔로우</p>
    </div>
  );
};

export default Suggestion;
