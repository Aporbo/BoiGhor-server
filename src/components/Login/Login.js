import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
 }else {
    firebase.app(); // if already initialized, use that one
 }
const Login = () => {
    const [logInUser,setLogInUser] =  useContext(UserContext)
    const [user,setUser] = useState({
        name:'',
        image:'',
        email:'',
    }) ;
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var users = result.user;
    const newUser = {...user};
    newUser.name = users.displayName;
    newUser.email = users.email;
    newUser.image = users.photoURL;
    setLogInUser(newUser);
    history.replace(from);
}).catch((error) => {
    var errorMessage = error.message;

  });
    }
    return (
        <>
     
        <div className="text-center mt-5 pt-5">
            <button style={{borderRadius:'0'}} onClick={handleGoogleSingIn} style={{margin:'0 auto'}} className="btn btn-success"><FontAwesomeIcon icon={faGoogle} /> Continue With Google Account</button>
        </div>
        </>
    );
};

export default Login;