import React, { useEffect, useState } from 'react';
import './Article.scss';
import '../../../../styles/common.scss';
import Section from './Section/Section';

const Article = () => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
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
