import React from 'react';
import styles from '../../styles/Components.module.css';

function ExpensiveOrder(props:any) {
    const totalPrices = props.orders.map((customer:any) => {
        return parseInt(customer.total_price);
    });

    const maxTotalPrice = Math.max(...totalPrices);
    
    return (
        <h2>
            Most Expensive Order: <span className={styles.green}>${maxTotalPrice}</span>
        </h2>
    );
}

export default ExpensiveOrder;