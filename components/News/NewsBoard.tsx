import React, { useEffect, useState } from "react";
import Axios from "axios";
import Flashcard from "./FlashCard";
import { IArticle } from "./News.types";
import { CardContainer } from "./News.styles";

export const NewsBoard = () => {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    Axios.get(url).then((response) => {
      setArticles(
        response.data.articles.map((article: IArticle) => {
          return {
            id: Date.now(),
            title: article.title,
            author: article.author,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
          };
        })
      );
    });
  }, []);

  return (
    <CardContainer>
      <Flashcard articles={articles} />
    </CardContainer>
  );
};
