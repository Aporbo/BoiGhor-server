import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const [logInUser,setLogInUser] = useContext(UserContext)
    const {ids} = useParams(); 
    const [order,setOrder] = useState([])
    useEffect(()=>{
        fetch('https://boighor.herokuapp.com/book/' + ids)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const orders = {
           ...logInUser,
            shipment : data,
            orders: order,
            date: new Date()
        }
       fetch('https://agile-tundra-84826.herokuapp.com/placeOrder',{
           method:'POST',
           headers: {'Content-Type' : 'application/json'},
           body: JSON.stringify(orders)
       })
       history.push('/orders')
    };
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                    <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth:'480px',margin:'auto'}}>
      <input className="form-control my-3"  placeholder="Name" name="name" ref={register({ required: true })} />
      {errors.name && <small>This field is required</small>}
      <input  className="form-control my-3" placeholder="Email" name="email" ref={register({ required: true })} />
      {errors.email && <small>This field is required</small>}
      <input className="form-control my-3"  placeholder="Phone" name="phone" ref={register({ required: true })} />
      {errors.phone && <small>This field is required</small>}
      <input className="form-control my-3"  placeholder="Address" name="address" ref={register({ required: true })} />
      {errors.address && <small>This field is required</small>}
      <input type="submit" className="btn btn-outline-dark w-100 mt-3" />
    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;