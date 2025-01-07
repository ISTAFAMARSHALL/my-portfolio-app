import React from "react";
import styles from "@/components/ui/badge-icons.module.css";

export default function BadgeIcons({ badges }) {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        {badges.map((badge, index) => (
          <div className={styles.badgeIcon} key={index}>
            <img
              src={badge.icon}
              alt={`${badge.label} icon`}
              className={styles.iconImage}
            />
            <span className={styles.badgeLabel}>{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}