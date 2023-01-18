import { Stack } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import RightSidebar from './rightSidebar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="layout_main">
            <Navbar />
            <Stack direction='row'>
                <Sidebar />
                <main>
                    {children}
                </main>
                <RightSidebar />
            </Stack>
            <Footer />
        </div>
    )
}

export default Layout