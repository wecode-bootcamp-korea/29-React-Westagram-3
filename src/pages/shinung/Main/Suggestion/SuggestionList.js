import React, { useState } from 'react';
import suggestionData from './SuggestionData';
import Suggestion from './Suggestion';
import './Suggestion.scss';

const SuggestionList = () => {
  const [suggestions, setSuggetsions] = useState(suggestionData);

  return (
    <div className="suggestion">
      <div className="info">
        <span>회원님을 위한 추천</span>
        <span>모두 보기</span>
      </div>
      {suggestions.map((suggestion, i) => (
        <Suggestion key={i} suggestion={suggestion} />
      ))}
    </div>
  );
};

export default SuggestionList;
