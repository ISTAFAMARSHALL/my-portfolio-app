"use client";

import React from "react";
import styles from "./experience.module.css";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "AscentUp",
    period: "July 2024 - September 2024",
    location: "Remote",
    description: [
      "Built a Next.js web application as part of a digital tech project, focusing on enhancing functionality and user engagement.",
    //   "Integrated third-party API MailJet, optimizing performance for seamless email communications.",
    //   "Worked in a collaborative environment, delivering milestones ahead of schedule.",
    ],
  },
  {
    role: "Software Developer",
    company: "Code by Istafa",
    period: "June 2022 - Present",
    location: "Holtsville, NY",
    description: [
      "Developed custom web applications using Next.js and React, optimizing user experience and performance.",
    //   "Collaborated with clients to define project goals and deliver tailored solutions.",
    //   "Managed project timelines, ensuring delivery within deadlines and budget.",
    ],
  },
  {
    role: "Software Engineering Student",
    company: "Flatiron School",
    period: "May 2021 - June 2022",
    location: "New York, NYC",
    description: [
      "Created full-stack applications using JavaScript, Ruby, React, and Rails, applying modern web development techniques.",
    //   "Contributed to peer reviews and debugging sessions, improving code quality and problem-solving abilities.",
    //   "Produced technical documentation, demonstrating clear communication of complex concepts.",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.heading}>Experience</h2>
      <ul className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <li key={index} className={styles.experienceItem}>
            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.company}>
              {exp.company} | {exp.location}
            </p>
            <p className={styles.period}>{exp.period}</p>
            <ul className={styles.descriptionList}>
              {exp.description.map((desc, idx) => (
                <li key={idx} className={styles.descriptionItem}>
                  {desc}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}