import React, { useEffect, useState } from 'react';
import './Article.scss';
import '../../../../styles/common.scss';
import Section from './Section/Section';

const Article = () => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <article className="article">
      {feedList.map(e => (
        <Section
          key={e.id}
          userName={e.userName}
          userImg={e.userImg}
          feedImg={e.feedImg}
          content={e.content}
        />
      ))}
    </article>
  );
};

export default Article;
