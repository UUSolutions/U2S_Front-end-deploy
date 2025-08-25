// import React from 'react'
import NavBar from './components/ui/NavBar';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Directories from './pages/Directories';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import About_Us from './pages/About_Us';
import styles from './assets/styles/App.module.css';

const App = () => {
  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100 ${styles.appDiv}`}>
        <NavBar />
        <Header />
        <main className="flex-grow-1">
          {/* <div className="container mt-4"> */}
          <Routes>
            <Route path="/Directories" element={< Directories />} />
            {/* Add more routed pages here */}
            <Route path="/" element={< Home/>} />
            <Route path="/About_Us" element={<About_Us />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;