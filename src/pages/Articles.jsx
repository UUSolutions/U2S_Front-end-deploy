import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../assets/styles/Articles.module.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/articles/')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className={`container-fluid ${styles.ArtMainBlock}`}>
      <h2 className={styles.mainHeading}>Articles</h2>
      {/* Changed class from list-group to our new grid style */}
      <ul className={styles.articleGrid}>
        {articles.map(article => (
          // The list item is now a "card"
          <li key={article.id} className={styles.articleCard}>
            <a href={`/articles/${article.id}`} target="_blank" rel="noopener noreferrer" className={styles.articleLink}>
              <h5 className={styles.articleTitle}>{article.title}</h5>
            </a>
            <p className={styles.articleMeta}><strong>Author:</strong> {article.author}</p>
            <p className={styles.articleMeta}><strong>Updated:</strong> {new Date(article.updated_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;