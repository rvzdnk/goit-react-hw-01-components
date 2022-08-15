import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {

    const {header__row, header, data__row, data__type, data, transactions} = styles;

    return(
        <table className ={transactions}>
            <thead>
                <tr className={header__row}>
                    <th className={header}>Type</th>
                    <th className={header}>Amount</th>
                    <th className={header}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) =>
                <tr key={id} className={data__row}>
                    <td className={data__type}>{type}</td>
                    <td className={data}>{amount}</td>
                    <td className={data}>{currency}</td>
                </tr>
                )}
            </tbody>

        </table>
    )
};

TransactionHistory.propTypes ={
    items: PropTypes.array,
}