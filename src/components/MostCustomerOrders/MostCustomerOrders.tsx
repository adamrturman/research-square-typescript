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

interface Customer {
    id: string;
    created_date: string;
    email: string;
    name: string;
}

interface Props {
    orders: Order[];
    customers: Customer[];
}

function MostCustomerOrdersRow(props:Props) {
    const {orders, customers} = props;
    console.log(customers)

    function findMaxOrderCustomerId() {
        const totalPrices = orders.map((order:Order) => {
            return order.total_price;
        });
    
        const maxTotalPrice = Math.max(...totalPrices);
    
        const maxOrder:any = orders.find((order:Order) => order.total_price === maxTotalPrice);

        return maxOrder.customer_id;
    }

    function findCustomerWithMaxOrder(maxOrderId:any) {
        const foundCustomer:any = customers.find((customer:any) => customer.id === maxOrderId);
        return foundCustomer.name;
    }

    const maxOrderCustomerId:string = findMaxOrderCustomerId();
    const maxCustomerName:string = findCustomerWithMaxOrder(maxOrderCustomerId);

    return (
        <h2>
            Customer with the most orders= <span className={styles.green}>{maxCustomerName}</span>
        </h2>
    );
}

export default MostCustomerOrdersRow;
