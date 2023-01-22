import React, { useState } from 'react'
import { Button, Box, Stack } from '@mui/material'
import { HamburgurRight, HamburgurLift,  } from '../../../../public/assets/export'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../store/layout'
import { CustomSwitch, Logo } from '../../export'
import SignupModal from '../../Signupmodal'

const Navbar = () => {
    const dispatch = useDispatch()
    const [showAddModal, setShowAddModal] = useState(false);
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

                    {/* <CustomSwitch /> */}
                </Box>
                <Box className="flex-center" gap={1.5}>
                    <button className='btn btn-primary' onClick={() => setShowAddModal(true)}>login</button>
                    <button className='btn btn-secondary'>Sign up</button>
                    <Box pr={2.75}>
                        {/* <Image src={MessageIcon} alt={"MessageIcon"} /> */}
                    </Box>
                </Box>
            </Stack>


            {showAddModal && <SignupModal showAddModal={showAddModal} setShowAddModal={setShowAddModal}  />}
            {/* <SignupModal/> */}





        </>
    )
}

export default Navbar