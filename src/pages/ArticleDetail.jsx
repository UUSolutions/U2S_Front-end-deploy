import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleDetail = () => {
  const { id } = useParams(); // get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/articles/${id}/`)
      .then(response => setArticle(response.data))
      .catch(error => console.error('Error fetching article:', error));
  }, [id]);

  if (!article) return <p>Loading article...</p>;

  return (
    <div className="container mt-4">
      <h2>{article.title}</h2>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Updated at:</strong> {new Date(article.updated_at).toLocaleString()}</p>
      <hr />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;