import React, { Component } from 'react';
import './index.css'

class admin extends Component {
    render() {
        return (
            <div className='admin-main'>
                <div className='sidebar'>
                    <h3>Home</h3>
                    <h3>Profile</h3>
                    <h3>Orders</h3>
                    <h3>Listings</h3>
                    <h3>Returns</h3>


                </div>
                <div className='main-content'>
                    <div className='widget-container'>
                    <div className= 'widget'>
                       <h2>Order Count</h2>
                    </div>
                         <div className= 'widget'>
                    <h2>Order Count</h2>
                    </div>

                    </div>
                    <div>
                        <div className='lg-widget'>
                            <h3>List</h3>
                        </div>
                    </div>
                    
                 
                    
                </div>
                
            </div>
        );
    }
}

export default admin;