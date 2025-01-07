export const metadata = {

    title: 'About Me - Isafa A Marshall',
    description: "Learn more about my journey to becoming a developer",
    
  }


// export default function AboutMePage () {
//     return (
//         <>
//             <div >
//                 <section style={{ textAlign:'justify'}}>
//                     <h2 style={{ textAlign:'center' , fontSize:'30px' , fontWeight:'bold', marginBottom: '5px'}}
//                     >About Me</h2>
//                     {/* <p>I enjoy video games, eating, cooking, and spending time with the family.</p> */}
//                     {/* <h2>My Journey</h2> */}
//                     {/* <p>I had a love for technology from a young age. I always found myself assisting others in setting up or fixing electronic devices, especially my grandfather. Any new shiny thing he would bring home there I was setting it up for him.</p>
//                     <p>I was introduced to programming in my senior year of high school. Ultimately this love for technology drove me into the Navy as a Cryptological Technician Technical CTT, specializing in anti-missile defense.</p>
//                     <p>Realizing anti-missile defense would never lead to civilian life and knowing I wanted a career in the tech field, I achieved my CCNA Certified Cisco Networking Administrator.</p>
//                     <p>During this time being offered territory manager of a prestigious Commercial Kitchen Repair company was something I could not turn down. I led a team of 12 technicians averaging a GOP exceeding 40% for three years.</p>
//                     <p>However, with all my success and achievements, I felt unfulfilled. In pursuit of true self-fulfillment and happiness, I resigned and registered for Flat Iron School for software engineering.</p>
//                     <p>Over the following 60 weeks, I mastered Javascript, React, HTML, and Ruby. I was able to hone my skills in front-end and back-end development. The learning curve was steep yet exhilarating knowing how rewarding the outcome would be upon completion.</p>
//                     <p>Several apps later, I started Code By Istafa, LLC as a freelance venture aimed at cultivating 15-plus years of customer service management along with military precision, and planning to build world-changing applications.</p>
//                     <p>My goal is to inspire through creativity, designing innovative engaging ways for users to interact with apps.</p> */}
                    
//                     From a young age, I was captivated by technology. Whether it was setting up my grandfather's new gadgets or fixing electronic devices for friends and family, I was always the go-to tech enthusiast.
//                     <br></br>
//                     <br></br>
//                     In my senior year of high school, I discovered programming, a revelation that sparked a deeper passion for technology. This passion led me to join the Navy as a Cryptologic Technician Technical (CTT), specializing in anti-missile defense systems. Although this role was deeply rewarding, I realized that my future lay in the broader tech industry.
//                     <br></br>
//                     <br></br>
//                     To transition into civilian tech roles, I earned my CCNA certification as a Cisco Certified Network Administrator. Soon after, I was offered the position of Territory Manager at a prestigious Commercial Kitchen Repair company. Leading a team of 12 technicians, I consistently achieved a GOP exceeding 40% for three years. Despite my success, I felt a persistent lack of fulfillment.
//                     <br></br>
//                     <br></br>
//                     Determined to find true satisfaction, I left my managerial role and enrolled in Flatiron School's software engineering program. Over 60 intensive weeks, I mastered JavaScript, React, HTML, and Ruby, gaining expertise in both front-end and back-end development. The steep learning curve was both challenging and exhilarating, but the rewards were undeniable.
//                     <br></br>
//                     <br></br>
//                     With newfound skills and a relentless drive, I founded Code By Istafa, LLC. As a freelancer, I combine over 15 years of customer service management experience with military precision and strategic planning to create world-changing applications.
//                     <br></br>
//                     <br></br>
//                     My mission is to inspire through creativity, designing innovative and engaging ways for users to interact with technology. I am excited to bring my unique blend of skills and experiences to a dynamic team, driving innovation and excellence in every project.
//                 </section>
//                 {/* <section class="contact">
//                     <h2>Contact Me</h2>
//                     <p>Email: <a href="mailto:codebyistafa@gmail.com">codebyistafa@gmail.com</a></p>
//                     <p>Medium: <a href="https://medium.com/@istafa.a.marshall" target="_blank">https://medium.com/@istafa.a.marshall</a></p>
//                     <p>LinkedIn: <a href="https://www.linkedin.com/in/istafa-a-marshall/" target="_blank">https://www.linkedin.com/in/istafa-a-marshall/</a></p>
//                 </section> */}
//             </div>
//         </>
//     )
// }


import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import newerImg from '@/public/images/C65EE828-4A30-462F-97EB-20BD146599E1_4_5005_c.jpeg';

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.content}>
      <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={newerImg}
          contain
          alt="Istafa Anthony Marshall"
          priority
        />
        <div className={styles.text}>
          <p>
            From a young age, I was captivated by technology. Whether it was
            setting up my grandfather's new gadgets or fixing electronic
            devices for friends and family, I was always the go-to tech
            enthusiast.
          </p>
          <p>
            My journey into software development began during my senior year of
            high school, where I first discovered programming. This newfound
            passion led me to join the Navy as a Cryptologic Technician,
            specializing in anti-missile defense systems. While my Navy career
            was rewarding, I realized my true calling lay in the broader tech
            industry.
          </p>
          <p>
            After earning my Cisco Certified Network Associate (CCNA)
            certification, I transitioned into the private sector, managing
            teams and delivering exceptional customer service. However, my love
            for technology drew me back to software development, leading me to
            enroll at Flatiron School.
          </p>
          <p>
            During this intensive program, I mastered full-stack development,
            building applications with JavaScript, React, and Ruby on Rails. I
            now use these skills to craft responsive and user-friendly web
            applications as a freelance developer under my brand,{" "}
            <strong>Code By Istafa</strong>.
          </p>
          <p>
            My goal is to inspire creativity and design innovative solutions
            that make technology accessible and engaging for everyone. I am
            excited to bring my unique blend of experiences, from military
            precision to customer-focused development, to new opportunities in
            the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}