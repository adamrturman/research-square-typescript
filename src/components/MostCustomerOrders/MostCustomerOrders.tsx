import React from 'react';
import styles from '../../styles/Components.module.css';

function MostCustomerOrdersRow(props:any) {
    const {orders, customers} = props;

    function findMaxOrderCustomerId() {
        const totalPrices = orders.map((customer:any) => {
            return parseInt(customer.total_price);
        });
    
        const maxTotalPrice = Math.max(...totalPrices);
    
        const maxOrder = orders.find((order:any) => order.total_price === maxTotalPrice);

        return maxOrder.customer_id;
    }

    function findCustomerWithMaxOrder(maxOrderId:any) {
        const foundCustomer = customers.find((customer:any) => customer.id === maxOrderId);
        return foundCustomer.name;
    }

    const maxOrderCustomerId = findMaxOrderCustomerId();
    const maxCustomerName = findCustomerWithMaxOrder(maxOrderCustomerId);

    return (
        <h2>
            Customer with the most orders= <span className={styles.green}>{maxCustomerName}</span>
        </h2>
    );
}

export default MostCustomerOrdersRow;
