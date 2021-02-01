import React from 'react';
import YearsChart from '../YearsChart/YearsChart';
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

// interface Map<Key, Value> {
//     get(key: Key): Value | undefined;
//     has(key: Key): boolean;
//     set(key: Key, value: Value): this;
// }

interface Totals {
    year: number;
    total: number;
}

function TotalOrdersByYears(props:Props) {
    function getOrdersSumByYear() {
        const sumByYear = props.orders.reduce((accumulator: Map<number, number>, order:Order) => {
            const orderYear = new Date(order.created_date).getFullYear();

            if (accumulator.has(orderYear)) {
                const currentSumByYear = accumulator.get(orderYear) || 0;
                accumulator.set(orderYear, currentSumByYear + order.total_price);
            } else {
                accumulator.set(orderYear, order.total_price)
            }
            
            return accumulator;
        }, new Map());

        return sumByYear;
    } 

    const totalPriceOfOrders: Map<number, number> = getOrdersSumByYear()

    // converting the totalPriceOfOrders Map into an array of objects, each contains the year and order total
    const arrayOfTotalsByYear: Totals[] = Array.from(totalPriceOfOrders, ([year, total]) => ({ year, total }));

    const formattedTotalsByYear = arrayOfTotalsByYear.map((year, index) => (
        <li key={index}>{year.year} - ${year.total}</li>
    ));

    return (
        <>
            <h2>
                Total Orders by year: <span className={styles.green}>{formattedTotalsByYear}</span>
            </h2>
            <YearsChart totals={arrayOfTotalsByYear} />
        </>
    );
}

export default TotalOrdersByYears;
