import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Headlines from './Headlines/Headlines';

const News = () => {
    const [articles,setArticles] = useState([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cdccdf04c41b4a78b375699d6bee0868")
        .then(res => res.json())
        .then(news => setArticles(news.articles))
    },[])

    
    return (
        <div>
            <h1>Article number : {articles.length}</h1>
            {
                    articles.map(article => <Headlines article = {articles}></Headlines>)
            }
        </div>
        
    );
};

export default News;