import React, { useEffect, useState } from 'react';
import './Article.scss';
import '../../../../styles/common.scss';
import Section from './Section/Section';

const Article = () => {
  const [feedList, setFeedList] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  return (
    <article className="article">
      {feedList.map(user => (
        <Section
          key={user.id}
          comments={comments}
          userName={user.userName}
          userImg={user.userImg}
          feedImg={user.feedImg}
          content={user.content}
        />
      ))}
    </article>
  );
};

export default Article;
