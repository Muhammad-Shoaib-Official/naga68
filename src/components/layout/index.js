import { Stack } from '@mui/material'
import React from 'react'
import { Sidebar, Navbar, RightSidebar, Footer } from '../export'

const Layout = ({ children }) => {
    return (
        <div className="layout_main">
            <Navbar />
            <Stack direction='row'>
                <Sidebar />
                <main style={{ flex: 1, background: "pink", maxWidth: 1040, margin: "0 auto" }}>
                    {children}
                </main>
                <RightSidebar />
            </Stack>
            <Footer />
        </div>
    )
}

export default Layout