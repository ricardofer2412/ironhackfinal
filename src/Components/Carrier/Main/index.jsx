import React from 'react'
import {Link} from 'react-router-dom'

export default class Carrier extends React.PureComponent {





render() {
  
    const path = this.props.location.pathname.substring(1);
    

    return (
        <div>
            <button><Link to={`${path}/att`}>ATT</Link></button>
            <button><Link to={`${path}/verizon`}>Verizon</Link></button>
            <button>TMobile</button>
            <button>Unlocked</button>
            <button>Other Carrier</button>  
        </div>
    )
}
    
}
