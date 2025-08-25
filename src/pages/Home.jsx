import React, { useState } from 'react'
import styles from '../assets/styles/Home.module.css'
// import homeImage from '../../assets/images/homeImage1.jpeg';
import { Link } from 'react-router-dom'
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { MdReduceCapacity } from "react-icons/md";
import { GiBulletImpacts } from "react-icons/gi";

const Home = () => {
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    try {
      const response = await fetch('http://localhost:8000/api/comments/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      })

      if (response.ok) {
        setStatus('Thank you for your comment!')
        setComment('')  // clear textarea
      } else {
        setStatus('Failed to submit comment.')
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.')
    }
  }

   return (
    <div className={styles.mainContainer}>

      <section className={styles.IntroHome}>
        <h2 className={styles.IntroHeader}>Access to wisdom is universal</h2>
        <p className={styles.IntroPar}>Good solution: Creativity + Innovation + Quality drivers </p>
        <p className={styles.IntroInfo}><Link to="/About_Us">Discover more about us</Link></p>
      </section>

      <section className={styles.KeyAreas}>
        <h2>Focus Areas</h2>
        <div className={styles.KeyImapct}>
          <GiBulletImpacts className={styles.Icons} />
          <h3>Research</h3>
          <p>Discovering, discivering Discovering</p>
        </div>

        <div className={styles.KeyData}>
          <GiArtificialIntelligence className={styles.Icons} />
          <h3>Consultancy</h3>
          <p>Discovering, discivering Discovering</p>
        </div>

        <div className={styles.KeyAI}>
          <FaDatabase className={styles.Icons} />
          <h3>AI and Data Innovations</h3>
          <p>Discovering, discivering Discovering</p>
        </div>

        <div className={styles.keyTraining}>
          <MdReduceCapacity className={styles.Icons} />
          <h3>Building capacities</h3>
          <p>Discovering, discivering Discovering</p>
        </div>
      </section>

      <section className={styles.IntroVideo}>     
        <p>Watch the video below to hear more of our story...</p>   
        <iframe
          src="https://www.youtube.com/embed/kYfNvmF0Bqw"
          title="Creating impact"
          width="200"
          height="100"
          allowFullScreen

          className={styles.video}
        />         
      </section>

      <section className={styles.Comments}>
        <h6>We would like to hear from you.....</h6>
        <form className={styles.form_Comments} onSubmit={handleSubmit}>
          <textarea
            rows="5"
            cols="20"
            placeholder="We highly appreciate your comments and suggestions on where we can improve"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className={styles.CommentArea}
          />
          <button type="submit" id="submit" className={styles.btnComment}>Submit</button>
        </form>
        {status && <p className={styles.submitFDB}>{status}</p>}
      </section>
    </div>
  )
}

export default Home


