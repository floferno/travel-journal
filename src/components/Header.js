import React from 'react'
import logo from '../images/logo.svg'

export default function Header() {
    return (
        <div className="app--header">
            <img className="app--header_logo" alt="logo" src={logo} />
            <p className="app--header_title"> my travel journal.</p>
        </div>
    )
}
