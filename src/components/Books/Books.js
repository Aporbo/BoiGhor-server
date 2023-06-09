import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Books = (props) => {
    const { name, price, author, imageURL , _id} = props.books;
    const history = useHistory()
    const handleClick = id => {
        history.push(`/checkout/${id}`)
    }
    return (
        <>
            <div style={{height:'500px',width:'300px'}} className="col-md-3 col-lg-4">
                <div className="card h-100 shadow" style={{border:'none',borderRadius:'10px'}}>
                    <img src={imageURL} className="card-img-top img-fluid w-100 h-75" style={{borderRadius:'5px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name} - {author}</h5>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <h3>${price}</h3>
                            </div>
                            <div>
                                <button style={{borderRadius:'0'}} onClick={()=>handleClick(_id)} className="btn btn-outline-info">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;