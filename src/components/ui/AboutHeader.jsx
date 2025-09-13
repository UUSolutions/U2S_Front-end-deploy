// src/components/ui/AboutHeader.jsx

import React from 'react';
import styles from '../../assets/styles/AboutHeader.module.css';

// Accept the onLinkClick and currentIndex props
const AboutHeader = ({ onLinkClick, currentIndex }) => {
    return (
        <header className={styles.aboutHeading}>
            <nav>
                {/* <h2>Who we are!!</h2> */}
                <ul className={styles.heading_lst}>
                    <li className={`${styles.h_list1} ${currentIndex === 0 ? styles.active : ''}`}>
                        <a onClick={() => onLinkClick(0)}><em>Mission</em></a>
                    </li>
                    <li className={`${styles.h_list2} ${currentIndex === 1 ? styles.active : ''}`}>
                        <a onClick={() => onLinkClick(1)}><em>Vision</em></a>
                    </li>
                    {/* <li className={`${styles.h_list3} ${currentIndex === 2 ? styles.active : ''}`}>
                        <a onClick={() => onLinkClick(2)}><em>Slogan</em></a>
                    </li> */}
                    <li className={`${styles.h_list4} ${currentIndex === 2 ? styles.active : ''}`}>
                        <a onClick={() => onLinkClick(2)}><em>Core values</em></a>
                    </li>
                    <li className={`${styles.h_list5} ${currentIndex === 3 ? styles.active : ''}`}>
                        <a onClick={() => onLinkClick(3)}><em>Our services</em></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AboutHeader;




// import React from 'react'
// import styles from '../../assets/styles/AboutHeader.module.css'

// const  AboutHeader= () => {
//   return (
//     <header className={styles.aboutHeading}>
//       <nav>
//         <h2>Who we are!!</h2>
//         {/* <p><strong>Will reflect on:</strong></p> */}
//         <ul className={styles.heading_lst}>
//           <li className={styles.h_list1}><a href="#Mission"><em>Mission</em></a></li>
//           <li className={styles.h_list2}><a href="#Vision"><em>Vision</em></a></li>
//           <li className={styles.h_list3}><a href="#Slogan"><em>Slogan</em> </a></li>
//           <li className={styles.h_list4}><a href="#Core-values"><em>Core values</em></a></li>
//           <li className={styles.h_list5}><a href="#Our-services"><em>Our services</em></a></li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default AboutHeader;
