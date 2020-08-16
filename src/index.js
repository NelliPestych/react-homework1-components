import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import Statistics from "./2component/2";
import friends from "./friends.json";
import FriendList from "./3component/3";
import transactions from "./4component/transactions.json";
import TransactionHistory from "./4component/4";
import Profile from "./1component/1";

ReactDOM.render(
  <App>
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
  </App>,
  document.getElementById("root")
);

