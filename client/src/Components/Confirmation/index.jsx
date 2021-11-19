import React from 'react'
import {Link} from 'react-router-dom'
export default function Confirm() {
    return (
        <div>
            Thank you! Your order has been submitted! You should receive an email shortly.
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}
