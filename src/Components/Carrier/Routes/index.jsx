import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

export default function Carrier() {

    const path = useParams().deviceModel //returns device model path

    return (
        <div>
            <button>
                <Link to={`${path}/att`}>ATT</Link>
            </button>
            <button>
                <Link to={`${path}/verizon`}>Verizon</Link>
            </button>
            <button>
                <Link to={`${path}/t-mobile`}>T-Mobile</Link>
            </button>
            <button>
                <Link to={`${path}/unlocked`}>Unlocked</Link>
            </button>
            <button>
                <Link to={`${path}/other`}>Other Carrier</Link>
            </button>  
        </div>
    )

    
}
