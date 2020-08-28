import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand text-success' href='#link'>StarDB</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor02'
                    aria-controls='navbarColor02' aria-expanded='false' aria-label='Toggle navigation' wfd-id='655'>
                <span className='navbar-toggler-icon' wfd-id='461'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarColor02' wfd-id='451'>
                <ul className='nav nav-tabs' wfd-id='273'>
                    <li className='nav-item' wfd-id='278'>
                        <a className='nav-link active' data-toggle='tab' href='#people'>People</a>
                    </li>
                    <li className='nav-item' wfd-id='277'>
                        <a className='nav-link' data-toggle='tab' href='#planets'>Planets</a>
                    </li>
                    <li className='nav-item' wfd-id='276'>
                        <a className='nav-link' href='#starships'>Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header