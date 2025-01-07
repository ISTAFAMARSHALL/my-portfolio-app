"use client";

import React from "react";
import styles from "./articles.module.css";

const articles = [
  {
    title: "Mastering React: Tips and Tricks",
    description: "Learn advanced React techniques to improve your frontend development skills.",
    link: "https://example.com/mastering-react",
  },
  {
    title: "Building Scalable Web Apps with Next.js",
    description: "A guide to using Next.js for creating scalable and performant web applications.",
    link: "https://example.com/nextjs-guide",
  },
  {
    title: "CSS Best Practices for Modern Websites",
    description: "Tips for writing clean, maintainable, and responsive CSS for modern web development.",
    link: "https://example.com/css-best-practices",
  },
];

export default function Articles() {
  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.heading}>Articles</h2>
      <ul className={styles.articleList}>
        {articles.map((article, index) => (
          <li key={index} className={styles.articleItem}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleDescription}>{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}