import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import friends from "./friends.json";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline ? (
          <span className={styles.statusIsOnline}></span>
        ) : (
          <span className={styles.statusIsOffline}></span>
        )}
        <span className={styles.status}></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

// const FriendListItem = ({ friends }) => (

// );

// Profile.defaultProps = {
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// };

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;

// ReactDOM.render(
//   <FriendList friends={friends} />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
