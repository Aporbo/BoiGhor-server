import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Books from '../Books/Books';

const Home = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [books, setBooks] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch('https://boighor.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setSpinner(false)
            })
    }, [books])
    return (

        <div>
       
            <div className="container">
                <div className="row g-4 mt-5">
                {spinner && <div className="text-center">
            <div class="spinner-grow text-info" style={{width: '3rem', height: '3rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>}
                    {books.map(pd => <Books books={pd} key={pd._id} ></Books>)}
                </div>
            </div>
        </div>
    );
};

export default Home;