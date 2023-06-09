import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import  './admin.css'
import ManageBook from './ManageBook';
import Sidebar from './Sidebar';
const Admin = () => {
    const  [logInUser,setLogInUser , globalCart,setGlobalCart] = useContext(UserContext)
    return (
        <div>
             
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-3">
                       <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <ManageBook></ManageBook>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;