import React from 'react'

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>ProHouse</title>
            </Head>
            <Box maxWidth='1280px' m='auto'>
                <NavBar />
                <main>{children}</main>
                <Footer />
            </Box>
        </>
    )
}