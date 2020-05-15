import React, {Fragment} from 'react'
import Header from './Header'
import Head from 'next/head'
import {Global, css} from '@emotion/core'

const Layout = props => {
    return(
        <Fragment>
            <Global
                styles={css`
                    :root{
                        --grey: #3d3d3d;
                        --grey2: #6F6F6F;
                        --orange: #DA552F;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'Open Sans', sans-serif
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: 'Open Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }
                `}
            />
            <Head>
                <html lang="en"/>
                <title>FoodHunt</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
                <link href="/static/css/app.css" rel="stylesheet"/>
            </Head>

            <Header/>
            <main>
                {props.children}
            </main>

        </Fragment>
    )
}

export default Layout