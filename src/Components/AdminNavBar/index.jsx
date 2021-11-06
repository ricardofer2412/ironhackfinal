
import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import authService from '../auth/auth-services';


class AdminNavBar extends React.Component {
    logoutUser = () => {
   authService.logout().then(() => {
     this.props.getUser(null, false);
   });
 };
render() {
   const { userData, userIsLoggedIn } = this.props;
   console.log(userData)

   console.log(userIsLoggedIn)
   if (userIsLoggedIn) {
     return (
       <nav className="nav-style">
         <ul>
           {userIsLoggedIn && <li>Welcome, {userData.username} </li>}
           <li>
             <Link to="/" style={{ textDecoration: 'none' }}>
               Products
             </Link>
           </li>
         </ul>
       </nav>
     );
   } else {
     return (
          <div>
         <nav className="nav-style">
           <ul>
             <li>
               <Link to="/login" style={{ textDecoration: 'none' }}>
                 Login
               </Link>
             </li>
             <li>
               <Link to="/signup" style={{ textDecoration: 'none' }}>
                 Signup
               </Link>
             </li>
           </ul>
         </nav>
       </div>
     );
   }
 }
}

export default AdminNavBar;