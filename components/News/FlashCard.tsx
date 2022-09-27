import React, { useState } from "react";
import { Back, Card, Front, Thumbnail } from "./News.styles";
import { IArticle } from "./News.types";

interface IProps {
  articles: IArticle[];
}

export default function Flashcard({ articles }: IProps) {
  const [articleIndex, setArticleIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
    if (articleIndex < articles.length - 1) {
      setArticleIndex(articleIndex + 1);
    } else {
      setArticleIndex(0);
    }
  };

  const targetArticle = articles[articleIndex];
  const ahref =
    articleIndex > 0 ? articles[articleIndex - 1] : articles[articleIndex];

  return (
    <Card flip={flip} onClick={handleCardClick}>
      <Front>
        {targetArticle && (
          <Thumbnail src={targetArticle.urlToImage} alt="article-image" />
        )}
        {targetArticle && targetArticle.title}
        {ahref && <a href={ahref.url}>read article</a>}
      </Front>
      <Back>
        {targetArticle && (
          <Thumbnail src={targetArticle.urlToImage} alt="article-image" />
        )}
        {targetArticle && targetArticle.title}
        {ahref && <a href={ahref.url}>read article</a>}
      </Back>
    </Card>
  );
}
