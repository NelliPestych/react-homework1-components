import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
