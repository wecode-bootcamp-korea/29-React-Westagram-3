import React, { useEffect, useState } from 'react';
import Feed from './Feed';

const FeedList = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  return (
    <>
      {feeds.map((feed, idx) => (
        <Feed key={idx} feed={feed} />
      ))}
    </>
  );
};

export default FeedList;
