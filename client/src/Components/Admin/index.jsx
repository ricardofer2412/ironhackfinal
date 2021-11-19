import React, { Component } from 'react';
import Home from './Home';
import './index.css'
import SideBar from './SideBar';
class Admin extends Component {
    render() {
        return (
            <div className='admin-main'>
              <SideBar />
              <Home />
            </div>
        );
    }
}

export default Admin;