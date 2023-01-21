import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import { HamburgurRight, HamburgurLift, LogoIcon, MessageIcon } from '../../../../public/assets/export'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../store/layout'
import { CustomSwitch, Logo } from '../../export'

const Navbar = () => {
    const dispatch = useDispatch()
    const { isShowLeftSideBar } = useSelector(state => state.layout)
    const toggleLeftSidebar = () => {
        dispatch(toggleSidebar("isShowLeftSideBar"))
    }

    return (
        <>
            <Stack className='navbar' minHeight={65} direction="row" alignItems="center" justifyContent={"space-between"}>
                <Box className="flex-center">
                    <Box className="logo">
                        <Box className="flex-center">
                            <Button className='hamburgur' onClick={toggleLeftSidebar} sx={{ mt: -1.3 }}>
                                {isShowLeftSideBar ?
                                    <Image src={HamburgurLift} alt={"HamburgurRight"} /> :
                                    <Image src={HamburgurRight} alt={"HamburgurRight"} />
                                }
                            </Button>
                            <Logo />
                        </Box>
                    </Box>

                    <CustomSwitch />
                </Box>
                <Box className="flex-center" gap={1.5}>
                    <button className='btn btn-primary'>login</button>
                    <button className='btn btn-secondary'>Sign up</button>
                    <Box pr={2.75} pl={2.25}>
                        <Image src={MessageIcon} alt={"MessageIcon"} />
                    </Box>
                </Box>
            </Stack>

        </>
    )
}

export default Navbar