import React from 'react'
import {Link} from 'react-router-dom'

export default function iPhone() {
    return (
        <div>
            <h1>This is all iPhone models we buy!</h1>
            <div>
                <section>
                   <img src="https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-13-Midnight-frontimage" alt="iphone 13 black" />
                   <Link to='iphone-13'>iPhone 13</Link>  
                </section>
            </div>
            
        </div>
    )
}
