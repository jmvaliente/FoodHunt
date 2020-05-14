import React from 'react'
import Search from '../ui/Search'
import Nav from './Nav'
import Link from 'next/link'

const Header = ( ) => {
    return(
        <header>
            <div>
                <div>
                    <h1>Food Hunt</h1>
                    <Search/>
                    <Nav/>
                </div>
                <div>
                    <p>Hello: Name</p>
                    <button type="button">Logout</button>
                    <Link href="#">Login</Link>
                    <Link href="#">Create User</Link>
                </div>
            </div>
        </header>
    )
}

export default Header