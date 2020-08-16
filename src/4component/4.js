import React from "react";
import styles from "./Trans.module.css";
import PropTypes from "prop-types";
import transactions from "./transactions.json";

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

TransactionHistory.propTypes = {
 items: PropTypes.array.isRequired,
//   name: PropTypes.string.isRequired,
//   stats: PropTypes.number.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
};

export default TransactionHistory;

