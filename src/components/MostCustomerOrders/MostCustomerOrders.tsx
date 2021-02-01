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

    function findMaxOrderCustomerId() {
        const totalPrices = orders.map((order: Order) => {
            return order.total_price;
        });
    
        const maxTotalPrice = Math.max(...totalPrices);
    
        const maxOrder: Order | undefined = orders.find((order: Order) => order.total_price === maxTotalPrice);

        return maxOrder && maxOrder.customer_id;
    }

    function findCustomerWithMaxOrder(maxOrderId: string | undefined)  {
        const foundCustomer: Customer | undefined = customers.find((customer:Customer) => customer.id === maxOrderId);

        return foundCustomer && foundCustomer.name;
    }

    function getMaxCustomerName() {
        const maxOrderCustomerId: string | undefined = findMaxOrderCustomerId();
        const maxCustomerName: string | undefined = findCustomerWithMaxOrder(maxOrderCustomerId);

        return maxCustomerName;
    }

    return (
        <h2>
            Customer with the most orders= <span className={styles.green}>{getMaxCustomerName()}</span>
        </h2>
    );
}

export default MostCustomerOrdersRow;
