// import React from 'react'
import React, { useState } from 'react'
import AboutHeader from '../components/ui/AboutHeader'
import styles from '../assets/styles/About_Us.module.css'

const About_Us = () => {
  const [showFullText, setShowFullText] = useState(false); {/*For add more*/}
  
  {/*States for page management*/}
  const [currentIndex, setCurrentIndex] = useState(0); 
  const sections = [
    <div className={styles.MissionContainer}>
          <section id="Mission" className={styles.Mission}>
            <h2 className={styles.HMission}>Mission</h2>
            {/* Shortened text */}
            {!showFullText && (
              <p>
                <strong>Proposal 1:</strong> Our mission is to deliver expert AI and data-driven consulting, 
                provide impactful training, and develop agile software solutions...
              </p>
            )}

            {/* Full text */}
            {showFullText && (
              <>
                <p>
                  <strong>Proposal 1:</strong> Our mission is to deliver expert AI and data-driven consulting, 
                  provide impactful training, and develop agile software solutions that solve real-world problems.
                  We aim to bridge the gap between business needs and technological potential by combining deep 
                  industry knowledge with cutting-edge innovation to make better decisions, and work more efficiently
                  with the power of AI and data. 
                </p>
                <p>
                  <strong>Proposal 2:</strong> Developing and applying cutting-edge technologies to solve 
                  real-world problems.
                </p>
              </>
            )}

            {/* Toggle button */}
            <button 
              onClick={() => setShowFullText(!showFullText)} className={styles.BtnMissionMore}
              // style={{ background: 'none', color: 'blue', border: 'none', cursor: 'pointer' }}
            >
              {showFullText ? 'Show less' : 'Read more'}
            </button>
          </section>
        </div>,
        <div className={styles.VisionContainer}>
          <section id="Vision" className={styles.Vision}>
            <h2 className={styles.HVision}>Vision</h2>
            <p><strong>Proposal 1:</strong> To become a trusted global partner in driving innovation and growth 
            through intelligent AI, data science, and software solutions that transform how businesses think, 
            operate, and succeed. 
            </p>

            <p> <strong>Proposal 2:</strong> To be a reliable global partner in offering innovative and impactful 
            solutions..
            </p>
          </section>
        </div>,
        <div className={styles.SloganContainer}>
          <section id="Slogan" className={styles.Slogan}>
            <h2 className={styles.HSlogan}>Slogan</h2>
            <p><strong>Proposal 1:</strong> Smart Solutions, Real Impact.</p>

            <p> <strong>Proposal 2:</strong> It is universal.</p>

            <p> <strong>Proposal 3:</strong> Elegance in simplicity, strength in impact.</p>
          </section>
        </div>,
        <div className={styles.ValuesContainer}>
          <section id="Core-values" className={styles.CoreValues}>
            <h2 className={styles.HCoreValues}>Core values</h2>
            <p><strong>Integrity:</strong> We act with transparency and trust.</p>
            <p> <strong>Innovation:</strong> We constantly seek smarter, scalable solutions.</p>
            <p> <strong>Impact:</strong> We focus on measurable value for clients and communities.</p>
            <p> <strong>Collaboration:</strong> We work closely with clients to co-create success.</p>
            <p> <strong>Excellence:</strong> We commit to the highest standards in service and delivery.</p>
          </section>
        </div>,
        <div className={styles.ServicesContainer}>
          <section id="Our-services" className={styles.OurServices}>
            <h2 className={styles.HOurServices}>Our services</h2>
            <p>gadahgdhagdhjagdhagfdagdahbdkahdhauhdvcuxbhudhauhduiahduqhdu
              jkahdjajddnksank
            </p>
          </section>
        </div>
  ];
   // other states: for header linking
   const handleHeaderClick = (index) => {
        setCurrentIndex(index);
    };

  const handleNext = () => {
        if (currentIndex < sections.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.mainBlock}>
            <AboutHeader
              onLinkClick={handleHeaderClick} 
              currentIndex={currentIndex}
            />
            <div className={styles.Us_section}>
                {sections[currentIndex]}
            </div>
            <div className={styles.navigation}>
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === sections.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default About_Us;

  