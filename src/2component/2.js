import React from "react";
import styles from "./Stats.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map((stat) => (
        <li key={stat.id} className={styles.item}>
          <span className={styles.statLabel}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
