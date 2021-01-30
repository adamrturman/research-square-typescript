import React, { useState, useEffect } from 'react';
import ExpensiveOrder from './components/ExpensiveOrder/ExpensiveOrder';
import MostCustomerOrders from './components/MostCustomerOrders/MostCustomerOrders';
import TotalOrdersByYears from './components/TotalOrdersByYear/TotalOrdersByYear';
import YearsChart from './components/YearsChart/YearsChart';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { fetchData } from './services/dataService';
import styles from './styles/App.module.css';
import logo from './styles/img/research-square-logo.svg';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
      fetchData()
      .then(({ data }) => {
        setOrders(data.orders);
        setCustomers(data.customers);
        setIsLoaded(true);
      })
      .catch(error => alert(error))
  }, []);

  if(!isLoaded) {
    return <LoadingSpinner />;
  } else {

  return (
    <div className={styles.app}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <hr/>
        <ExpensiveOrder orders={orders} />
        <MostCustomerOrders orders={orders} customers={customers}/>
        <TotalOrdersByYears orders={orders} />
        <YearsChart orders={orders} customers={customers} />
    </div>
  );
  }
}

export default App;
