import React from 'react';
import styles from '../../styles/Components.module.css';

interface Item {
    name: string;
    price: number
}

interface Order {
    id: string;
    customer_id: string;
    created_date: string;
    fulfilled_date: string;
    items: Item[];
    total_price: number
}

interface Props {
    orders: Order[];
}

function ExpensiveOrder(props:Props) {
    const totalPrices = props.orders.map((order:Order) => {
        return order.total_price;
    });
    const maxTotalPrice:number = Math.max(...totalPrices);
    return (
        <h2>
            Most Expensive Order: <span className={styles.green}>${maxTotalPrice}</span>
        </h2>
    );
}

export default ExpensiveOrder;