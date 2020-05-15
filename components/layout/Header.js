import React, { Fragment } from 'react'
import Search from '../ui/Search'
import Nav from './Nav'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Button from '../ui/Button'

//Header//

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

// User Panel//

const UserPanel = styled.div`
    display: flex;
    align-items: center;
`

const NameUserPanel = styled.p ` margin-right: 2rem`

const Header = ( ) => {

    const user = true

    return(
        <header>
            <ContainerHeader>
                <div>
                    <Link href="/">
                        <Logo>Food Hunt</Logo>
                    </Link>
                    <Search/>
                    <Nav/>
                </div>
                <UserPanel>
                    {user 
                    
                    ?(
                        <Fragment>
                            <NameUserPanel>Hello: Name</NameUserPanel>
                            <Button
                                bgColor="true"
                            >Logout
                            </Button>
                        </Fragment>
                    )
                    :
                    (
                        <Fragment> 
                            <Link href="/">
                                <Button
                                    bgColor="true"   
                                >Login</Button>
                            </Link>
                            <Link href="/">
                                <Button>Create User</Button>
                            </Link>
                        </Fragment>
                    )}
                    
                </UserPanel>
            </ContainerHeader>
        </header>
    )
}

export default Header