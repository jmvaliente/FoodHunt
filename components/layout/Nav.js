import React from 'react'
import Link from 'next/link'

const Nav = () =>{
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Populate</Link>
            <Link href="/">Add Food</Link>
        </nav>
    )
}

export default Nav