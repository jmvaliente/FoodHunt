import React from 'react'
import Search from '../ui/Search'
import Nav from './Nav'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const ContainerHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto', serif;
    margin-right: 2rem;
`

const Header = ( ) => {
    return(
        <header
            css={css`
                border-bottom: 2px solid var(--grey2);
                padding: 1rem 0;
            `}
        >
            <ContainerHeader>
                <div>
                    <Logo>Food Hunt</Logo>
                    <Search/>
                    <Nav/>
                </div>
                <div>
                    <p>Hello: Name</p>
                    <button type="button">Logout</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Create User</Link>
                </div>
            </ContainerHeader>
        </header>
    )
}

export default Header