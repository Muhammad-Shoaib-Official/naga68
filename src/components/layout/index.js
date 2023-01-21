import { Container, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Sidebar, Navbar, RightSidebar, Footer } from '../export'

const Layout = ({ children }) => {
    const { isShowLeftSideBar, isShowRightSideBar } = useSelector(state => state.layout)
    console.log(isShowLeftSideBar, isShowRightSideBar);
    return (
        <div className="layout_main">
            <Navbar />
            <Stack direction='row'>
                {isShowLeftSideBar &&
                    <Sidebar />
                }
                <Container maxWidth="lg" sx={{ maxWidth: "1040px !important" }}>
                    {children}
                </Container>
                {
                    isShowRightSideBar &&
                    <RightSidebar />
                }
            </Stack>
            <Footer />
        </div>
    )
}

export default Layout