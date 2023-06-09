import React from 'react';

const UserOrder = (props) => {
    const {imageURL,name,quantity,price} = props.orders.orders
    const handleDelete = (id) => {
      fetch(`https://boighor.herokuapp.com/orderDelete/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => {})
    }
    return (

<div>
<div className="col-md-12"> 
          <div className="card mb-3 shadow" style={{border:'0'}}>
 <div className="row g-0">
   <div className="col-md-2">
     <img src={imageURL} className="img-fluid" alt="..."/>
   </div>
   <div className="col-md-10">
     <div className="card-body">
       <h5 className="card-title">{name}</h5>
       <p className="card-text">Quantity : {quantity}</p>
       <p className="card-text">Price : ${price}</p>
       <p className="card-text"><small className="text-muted">Ordered in <b>{new Date(props.orders.date).toDateString('dd/MM/yyyy')}</b></small></p>
       <button onClick={()=>handleDelete(props.orders._id)} className="btn btn-outline-danger" style={{borderRadius:'0'}}>Cancel Order</button>
     </div>
   </div>
 </div>
</div>
       </div>
</div>

      
    );
};

export default UserOrder;