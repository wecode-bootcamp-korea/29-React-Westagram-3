import React, { useEffect, useState } from 'react';
import Feed from './Feed';

const FeedList = props => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  return (
    <>
      {feeds.map(feed => (
        <Feed
          id={feed.id}
          userName={feed.userName}
          userImage={feed.userImage}
          feedImage={feed.feedImage}
          isLiked={feed.isLiked}
          howmanyImage={feed.howmanyImage}
          howmanyUser={feed.howmanyUser}
          howmany={feed.howmany}
          content={feed.content}
        />
      ))}
    </>
  );
};

export default FeedList;
