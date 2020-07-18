import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import transactions from "./transactions.json";
import styles from "./Trans.module.css";
import PropTypes from "prop-types";
import transactions from "./transactions.json";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {listItems}
    </tbody>
  </table>
);

const listItems = transactions.map((transaction) => (
  <tr key={transaction.id}>
    <td>{transaction.type}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.currency}</td>
  </tr>
))

// Profile.defaultProps = {
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
// };

TransactionHistory.propTypes = {
 items: PropTypes.array.isRequired,
//   name: PropTypes.string.isRequired,
//   stats: PropTypes.number.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
};

export default TransactionHistory;

// ReactDOM.render(
//   <TransactionHistory items={transactions} />,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
