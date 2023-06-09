import React, { useEffect, useState } from 'react';
import Bookmanage from './Bookmanage';

const ManageBook = () => {
    const [ManageBook, setManageBook] = useState([]);
    const [spinner,setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://boighor.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                 setManageBook(data)
                 setSpinner(false)
                })
    }, [])
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-12">
                        <div className="px-5">
                            <h2 className="mt-2">Manage Books</h2>


                            <table class="table table-striped table-inverse table-responsive">
                                <thead className="thead-inverse">
                                    <tr>
                                        <th>Book Name</th>
                                        <th>Author</th>
                                        <th>Price</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {ManageBook.map(pd => <Bookmanage key={pd._id} books={pd}></Bookmanage>)}
                                </tbody>
                            </table>
                            {spinner && <div className="text-center">
                                <div class="spinner-grow text-info" style={{width: '3rem', height: '3rem'}} role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBook;