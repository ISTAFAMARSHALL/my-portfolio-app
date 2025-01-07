"use client";

import React from "react";
import BadgeDisplay from "@/components/badge-display";
import styles from "@/components/ui/badge-icons.module.css";

export default function Badges() {
  const badges = [
    { label: "React", icon: "/icons/react-icon.svg" },
    { label: "Next.js", icon: "/icons/nextjs-icon.svg" },
    { label: "JavaScript", icon: "/icons/javascript-icon.svg" },
    { label: "CSS", icon: "/icons/css-icon.svg" },
    { label: "HTML", icon: "/icons/html-icon.svg" },
  ];

  return (
    <div className={styles.badgeContainer}>
      <h2 className={styles.heading}>Technologies & Skills</h2>
      <div className={styles.scrollContainer}>
        <BadgeDisplay badges={badges} />
      </div>
    </div>
  );
}