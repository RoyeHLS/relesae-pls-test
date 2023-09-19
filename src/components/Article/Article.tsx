import React from "react";

interface IArticle {
  text: string;
  source: string;
}

const Article: React.FC<IArticle> = ({ source, text }) => {
  return (
    <div>
      <p>Article</p>
      <div>{text}</div>
      <div>{source}</div>
    </div>
  );
};

export default Article;
