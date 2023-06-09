import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import UserOrder from './UserOrder';

const Orders = () => {
    const [logInUser,setLogInUser ] = useContext(UserContext);
    const [userOrder,setUSerOrder] = useState([]);
    const [spinner,setSpinner] = useState(true);
    useEffect(()=>{
        fetch('https://boighor.herokuapp.com/getOrders?email=' + logInUser.email)
        .then(res => res.json())
        .then(data => {
            setUSerOrder(data)
            setSpinner(false)
        })
    },[userOrder])
    return (
        <div>
            
           <div className="container">
           <h4 className="mt-3"> {logInUser.name}  ,You have {userOrder.length} pending order</h4>
               <div className="row mt-5">
               {spinner && <div className="text-center">
            <div class="spinner-grow text-info" style={{width: '3rem', height: '3rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>}
               {userOrder.map(order => <UserOrder orders={order}></UserOrder>)}
               </div>
           </div>
        </div>
    );
};

export default Orders;