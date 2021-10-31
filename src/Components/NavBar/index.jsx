import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export default function NavBar() {
    return (
       <header className="navBar">
            <Link to='/iphone'>iPhone</Link>
            <Link to='/samsung'>Samsung</Link>
            <Link to='/pixel'>Pixel</Link>
            <Link to='/ipad'>iPad</Link>
            {/* <Link to='/macbook'>Macbook</Link> */}


       </header>
    )
}
