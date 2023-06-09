import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
const Bookmanage = (props) => {
    const {name,price,author ,_id} = props.books;
    const history = useHistory()
    const handleDelete = id => {
        fetch(`https://boighor.herokuapp.com/delete/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
                alert('delete')
                history.push('/admin/AddBook')
    })
    }
    return (   
                     <tr>
                         <td scope="row">{name}</td>
                         <td>{author}</td>
                         <td>{price}</td>
                         <td><button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                     </tr>
                
     
    );
};

export default Bookmanage;