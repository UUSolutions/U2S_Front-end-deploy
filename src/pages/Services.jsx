
// import React from 'react'
import styles from '../assets/styles/Services.module.css'
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { MdReduceCapacity } from "react-icons/md";
import { GiBulletImpacts } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { SiGooglecloudcomposer } from "react-icons/si";
// Import the new reusable component
import ServiceBlock from './ServiceBlock';

const Services = () => {
  return (
    <div className={styles.ServMainBlock}>

      <ServiceBlock className={styles.ServAIBlock}
        icon={<FaDatabase className={styles.Icons} />}
        title="AI and Data Science Innovations"
      >
        <ul className={styles.ServAIList}>
          <li className={styles.ServAIListItem}>GIS applications and remote sensing data analysis.</li>
          <li className={styles.ServAIListItem}>Leveraging advanced tools such as Power BI, GIS, Python, Tableau,etc. 
            to deliver insightful business analysis services.
          </li>
          <li className={styles.ServAIListItem}>Building computer vision solutions to address real-world challenges.</li>
          <li className={styles.ServAIListItem}>Data engineering processes.</li>
          <li className={styles.ServAIListItem}>Design and implementation of data warehouses to support business solutions.</li>
        </ul>
      </ServiceBlock>

      <ServiceBlock className={styles.ServConsultBlock}
        icon={<GiArtificialIntelligence className={styles.Icons} />}
        title="Consultancy"
      >
        <ul className={styles.ServConsultList}>
          <li className={styles.ServConsultListItem}>Delivering data- and technology-driven consultancy.</li>
        </ul>
      </ServiceBlock>

      <ServiceBlock className={styles.ServRDBlock}
        icon={<GiBulletImpacts className={styles.Icons} />}
        title="Research"
      >
        <ul className={styles.ServRDList}>
          <li className={styles.ServRDListItem}>Collaborative Research in AI and Emerging Technologies.</li>
        </ul>
      </ServiceBlock>

      <ServiceBlock className={styles.ServCBBlock}
        icon={<MdReduceCapacity className={styles.Icons} />}
        title="Capacity Building"
      >
        <ul className={styles.ServCBList}>
          <li className={styles.ServCBListItem}><strong>Soft Skills Training: </strong>Communication, teamwork, problem-solving, time management, presentation, etc.</li>
          <li className={styles.ServCBListItem}><strong>Data Science & AI: </strong>Full-cycle data solutions and tailored AI applications.</li>
          <li className={styles.ServCBListItem}><strong>Programming Training: </strong>Courses in Python, SQL, C/C++, and related technologies.
          </li>
          <li className={styles.ServCBListItem}><strong>Data Visualization: </strong>Expertise in Power BI, Tableau, and other tools.</li>
          <li className={styles.ServCBListItem}><strong>GIS & Remote Sensing: </strong>GIS applications and satellite data analysis.</li>
        </ul>
      </ServiceBlock>

      <ServiceBlock className={styles.ServITBlock}
        icon={<GrCloudComputer className={styles.Icons} />}
        title="Computer & IT Solutions"
      >
        <ul className={styles.ServITList}>
          <li className={styles.ServITListItem}>Websites and Web App Solutions.</li>
        </ul>
      </ServiceBlock>

      <ServiceBlock className={styles.ServMarketBlock}
        icon={<SiGooglecloudcomposer className={styles.Icons} />}
        title="E-Marketing"
      >
        <ul className={styles.ServMarketListItem}>
          <li className={styles.ServMarketListItem}>Providing end-to-end e-marketing services to drive visibility and growth.</li>
        </ul>
      </ServiceBlock>

    </div>
  );
};

export default Services;















// const Services = () => {
//   return (
//     <div className={styles.ServMainBlock}>
//       <div className={styles.ServAIBlock}>
//         <FaDatabase className={styles.Icons} />
//         <h2 className={styles.servHeader}>AI and Data Science Innovations</h2>
//         <ul className={styles.ServAIList}>
//           <li className={styles.ServAIListItem}>Data collection and annotations (Satellite data, etc..).</li>
//           <li className={styles.ServAIListItem}>
//             Dashboard enabling business services using a variety of tools (Power BI, GIS, Python, Tableau, etc.).
//           </li>
//           <li className={styles.ServAIListItem}>Building computer vision solutions to address real-world challenges.</li>
//           <li className={styles.ServAIListItem}>Data engineering processes.</li>
//           <li className={styles.ServAIListItem}>Design and implementation of data warehouses to support business solutions.</li>
//         </ul>
//       </div>

//       <div className={styles.ServConsultBlock}>
//         <GiArtificialIntelligence className={styles.Icons} />
//         <h2 className={styles.servHeader}>Consultancy</h2>
//         <ul className={styles.ServConsultList}>
//           <li className={styles.ServConsultListItem}>hhhhhhhhhhh</li>
//           <li className={styles.ServConsultListItem}>hhhhhhhhhhh</li>
//           <li className={styles.ServConsultListItem}>hhhhhhhhhhh</li>
//         </ul>
//       </div>

//       <div className={styles.ServRDBlock}>
//         <GiBulletImpacts className={styles.Icons} />
//         <h2 className={styles.servHeader}>Research</h2>
//         <ul className={styles.ServRDList}>
//           <li className={styles.ServRDListItem}>Collaborative Research in AI and Emerging Technologies with Academia.</li>
//           <li className={styles.ServRDListItem}>Collaborating with individuals on diverse research initiatives.</li>
//           <li className={styles.ServRDListItem}>Advancing societal impact through research publications and 
//             conference contributions.
//           </li>
//         </ul>
//       </div>

//       <div className={styles.ServCBBlock}>
//         <MdReduceCapacity className={styles.Icons} />
//         <h2 className={styles.servHeader}>Capacity building</h2>
//         <ul className={styles.ServCBList}>
//           <li className={styles.ServCBListItem}>Capacity building in essential soft skills to foster safer, 
//             more efficient workplaces ;including communication, teamwork, stress management, problem-solving, 
//             time management, and more.
//           </li>
//           <li className={styles.ServCBListItem}>End-to-End Presentation Preparation Solutions.</li>
//           <li className={styles.ServCBListItem}>Data Science: End-to-end solutions covering the 
//             full cycle from data collection and processing to generating actionable insights.
//           </li>
//           <li className={styles.ServCBListItem}>AI Solutions: Leveraging classical machine learning 
//             and advanced deep learning to deliver tailored applications across various domains.
//           </li>
//           <li className={styles.ServCBListItem}>Training in multiple programming languages and applications, 
//             with a focus on Python (general, data science, web development), SQL, C/C++, 
//             and related technologies.
//           </li>
//           <li className={styles.ServCBListItem}>Use of different data visualization tools like PowerBI, 
//             Tableau and more.
//           </li>
//           <li className={styles.ServCBListItem}>GIS application.</li>
//           <li className={styles.ServCBListItem}>Satellite data collection and analysis with widely known 
//             platforms like Google Earth Engine.
//           </li>
//         </ul>
//       </div>

//       <div className={styles.ServITBlock}>
//         <GrCloudComputer className={styles.Icons} />
//         <h2 className={styles.servHeader}>Computer & IT Solutions</h2>
//         <ul className={styles.ServITList}>
//           <li className={styles.ServITListItem}>Custom Websites and Web App Solutions.</li>
//         </ul>
//       </div>
  
//     </div>
//   )
// }

// export default Services