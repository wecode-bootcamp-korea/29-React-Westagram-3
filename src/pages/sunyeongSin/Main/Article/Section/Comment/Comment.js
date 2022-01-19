import React, { useState } from 'react';
import './Comment.scss';
import '../../../../../../styles/common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ data, comment, remove, name }) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="feed-comment">
      <span>
        <span>
          <strong>{name ? name : localStorage.getItem('id')}</strong> {comment}
        </span>
        <div>
          <FontAwesomeIcon
            className={!isLike ? '' : 'isLike'}
            icon={faHeart}
            onClick={() => setIsLike(!isLike)}
          />
          <button
            onClick={() => remove(data.key)}
            className="feed-commnet-delete-button"
          >
            X
          </button>
        </div>
      </span>
    </div>
  );
};

export default Comment;
