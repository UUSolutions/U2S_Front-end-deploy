import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/articles/')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Articles</h2>
      <ul className="list-group">
        {articles.map(article => (
          <li key={article.id} className="list-group-item">
            {/* <Link to={`/articles/${article.id}`}>
              <h5>{article.title}</h5>
            </Link> */}

            <a href={`/articles/${article.id}`} target="_blank" rel="noopener noreferrer">
              <h5>{article.title}</h5>
            </a> 
            {/* This above helps in opening in a new tab  */}
            <p><em>Author</em> : {article.author}</p>
            {/* <p><em>Updated at</em> : {article.updated_at}</p> */}
            <p><em>Updated at</em> : {new Date(article.updated_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;