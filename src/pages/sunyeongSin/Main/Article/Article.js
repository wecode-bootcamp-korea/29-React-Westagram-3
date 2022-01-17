import React from 'react';
import './Article.scss';
import '../../../../styles/common.scss';
import Section from './Section/Section';

const Article = () => {
  return (
    <article className="article">
      <Section />
      <Section />
      <Section />
    </article>
  );
};

export default Article;
