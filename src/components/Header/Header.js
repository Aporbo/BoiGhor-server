import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css'
const Header = () => {
  const [logInUser,setLogInUser] = useContext(UserContext);

    return (
        <>
     <nav className="navbar navbar-expand-lg " style={{background:'#7FB3D5',color:'#fff'}}>
  <div className="container">
    <Link className="navbar-brand" to="/">
      <h3> <span style={{color:'orange'}} >Boi</span><span style={{color:'black'}}>Ⓖ
</span><span style={{color:'white'}}>hor</span> </h3>
</Link>
<br/>
<h6 className='title' > <img src="https://blog.flamingtext.com/blog/2021/04/07/flamingtext_com_1617835077_75679301.gif" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"></img>
</h6>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ms-auto hypertext d-lg-flex align-items-lg-center">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/orders">Orders</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/admin/ManageBook">Admin</Link>
        </li>
        <li className="nav-item">
        {!logInUser.email &&
        <Link className="nav-link text-center" style={{background:'#2C3E50', borderRadius:'20px' ,padding:"7px 25px"}} to="/login"><b>Sign In</b></Link>}
        </li>
        
        {logInUser.email && <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {logInUser.image ? <img style={{width:'28px',height:'28px',borderRadius:'50%'}} src={logInUser.image} alt=""/> : <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src="https://i.ibb.co/4spK4g2/man-303792-960-720.png" alt=""/>}
          </Link>
          <ul className="dropdown-menu shadow me-lg-5 text-center" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">{logInUser.name}</Link></li>
            <li>   <button onClick={()=>setLogInUser({})} className="nav-link m-auto mt-3" style={{background:'#17202A',padding:"7px 25px",color:'#A9CCE3', borderRadius:'15px'}} ><b>Sign Out</b></button></li>
          </ul>
        </li>}
        <li>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;