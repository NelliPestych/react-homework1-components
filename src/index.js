import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import Statistics from "./2";
import friends from "./friends.json";
import FriendList from "./3";
import transactions from "./transactions.json";
import TransactionHistory from "./4";
import Profile from "./1";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Statistics title="Upload stats" stats={statisticalData} />,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <FriendList friends={friends} />,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <TransactionHistory items={transactions} />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
