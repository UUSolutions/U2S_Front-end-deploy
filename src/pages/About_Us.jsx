// import React from 'react'
import React, { useState } from 'react'
import AboutHeader from '../components/ui/AboutHeader'
import styles from '../assets/styles/About_Us.module.css'
import { Link } from 'react-router-dom'
import { TbPlayerTrackNext } from "react-icons/tb";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const About_Us = () => {
  // const [showFullText, setShowFullText] = useState(false); {/*For add more*/}
  
  {/*States for page management*/}
  const [currentIndex, setCurrentIndex] = useState(0); 
  const sections = [
    <div className={styles.MissionContainer}>
          <section id="Mission" className={styles.Mission}>
            <h2 className={styles.HMission}>Mission</h2>
            {/* Shortened text */}
            {/* {!showFullText && ( */}
            <p>
              Providing accessible and impactful technology to help businesses and communities solve 
              real-world challenges.
            </p>
            {/* )} */}

            {/* Full text */}
            {/* {showFullText && (
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
            {/* <button 
              onClick={() => setShowFullText(!showFullText)} className={styles.BtnMissionMore}
              // style={{ background: 'none', color: 'blue', border: 'none', cursor: 'pointer' }}
            >
              {showFullText ? 'Show less' : 'Read more'}
            // </button> */} 
           
          </section>
        </div>,
        <div className={styles.VisionContainer}>
          <section id="Vision" className={styles.Vision}>
            <h2 className={styles.HVision}>Vision</h2>
            <p>To be a trusted global partner delivering innovative technology that transforms the
               success of businesses and communities.
            </p>
         
          </section>
        </div>,
        // <div className={styles.SloganContainer}>
        //   <section id="Slogan" className={styles.Slogan}>
        //     <h2 className={styles.HSlogan}>Slogan</h2>
        //     <p><strong>Proposal 1:</strong> Smart Solutions, Real Impact.</p>

        //     <p> <strong>Proposal 2:</strong> It is universal.</p>

        //     <p> <strong>Proposal 3:</strong> Elegance in simplicity, strength in impact.</p>
        //   </section>
        // </div>,
        // In your About_Us.js file, update the Core Values section to this:

        <div className={styles.ValuesContainer}> {/* This is the new main container */}
          
          {/* 1. Title is now outside and above the grid */}
          {/* <h2 className={styles.HCoreValues}>Core values</h2> */}

          {/* 2. The grid is now inside its own container */}
          <section id="Core-values" className={styles.CoreValuesGrid}>
            
            <div className={styles.CVluesCard}>
              <h3>Integrity</h3>
              <p>We act with transparency and trust.</p>
            </div>

            <div className={styles.CVluesCard}>
              <h3>Innovation</h3>
              <p>We constantly seek smarter, scalable solutions.</p>
            </div>

            <div className={styles.CVluesCard}>
              <h3>Impact</h3>
              <p>We focus on measurable value for clients and communities.</p>
            </div>

            <div className={styles.CVluesCard}>
              <h3>Collaboration</h3>
              <p>We work closely with clients to co-create success.</p>
            </div>

            <div className={styles.CVluesCard}>
              <h3>Excellence</h3>
              <p>We commit to the highest standards in service and delivery.</p>
            </div>

            <div className={styles.CVluesCard}>
              <h3>Sustainability</h3>
              <p>We create an impact that lasts.</p>
            </div>
            
          </section>
        </div>,
        <div className={styles.ServicesContainer}>
          <section id="Our-services" className={styles.OurServices}>
            <h2 className={styles.HOurServices}>Our Services</h2>
            
            {/* This is the new flex container for all your services content */}
            <div className={styles.servicesContent}>

              {/* Service Category 1 */}
              <div className={styles.serviceCategory}>
                <ul className={styles.servList}>
                  <li>AI and Data Science Innovations</li>
                  <li>Consultancy</li>
                </ul>
              </div>

              {/* This divider will be styled as a vertical line */}
              <div className={styles.servDivider}></div>

              {/* Service Category 2 */}
              <div className={styles.serviceCategory}>
                <ul className={styles.servList}>
                  <li>Research</li>
                  <li>Capacity Building</li>
                </ul>
              </div>

              {/* This divider will be styled as a vertical line */}
              <div className={styles.servDivider}></div>

              {/* Service Category 3 */}
              <div className={styles.serviceCategory}>
                <ul className={styles.servList}>
                  <li>Computer & IT Solutions</li>
                  <li>E-Marketing</li>
                </ul>
              </div>

            </div>
            
            <p className={styles.LinkToservice}>
              <Link to="/Services">More about our Services</Link>
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
                <button onClick={handlePrevious} disabled={currentIndex === 0}><GrCaretPrevious /></button>
                <button onClick={handleNext} disabled={currentIndex === sections.length - 1}><GrCaretNext/></button>
            </div>
        </div>
    );
};

export default About_Us;

  