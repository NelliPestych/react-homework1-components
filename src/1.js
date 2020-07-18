import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import user from "./user.json";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers: </span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views: </span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes: </span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;

// ReactDOM.render(
//   <Profile
//     name={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
