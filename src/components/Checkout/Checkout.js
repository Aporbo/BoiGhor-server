import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [logInUser,setLogInUser ,] = useContext(UserContext)
    const { id } = useParams();
    const history = useHistory();
    const [book, setBook] = useState({});
    
    const handleCheckout = ids => {
        history.push(`/placeOrder/${ids}`)
    }
    const { name, price, quantity } = book;
    useEffect(() => {
        fetch('https://boighor.herokuapp.com/book/' + id)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])
    return (
        <>
        
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>Checkout</h1>
                        <table className="table">
                            <thead style={{borderBottom:'0px'}}>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{color:'#2874A6'}} scope="row">{name}</td>
                                    <td style={{color:'#2874A6'}} >{quantity}</td>
                                    <td style={{color:'#2874A6'}} >${price}</td>
                                </tr>
                                <tr >
                                    <th scope="row">Total</th>
                                    <td></td>
                                    <th>${price}</th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ms-auto">
                        <button style={{borderRadius:'0',textAlign:'center'}} onClick={()=>handleCheckout(id)} className="mt-3 btn btn-success">Checkout your Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;