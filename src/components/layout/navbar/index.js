import React, { useState } from 'react'
import { Button, Box, Stack } from '@mui/material'
import { HamburgurRight, HamburgurLift } from '../../../../public/assets/export'
import Image from 'next/image'
// import HamburgurLeftIcon from '../../../public/assets/icons'

const Navbar = () => {
    const [isShowLeftSideBar, setIsShowLeftSideBar] = useState(false)
    return (
        <>
            <Stack minHeight={65} alignItems="center" justifyContent={"space-between"}>
                <Box>
                    <Button onClick={() => setIsShowLeftSideBar(!isShowLeftSideBar)}>
                        {isShowLeftSideBar ?
                            <Image src={HamburgurRight} alt={"HamburgurRight"} /> :
                            <Image src={HamburgurLift} alt={"HamburgurRight"} />
                        }
                    </Button>
                </Box>
                <Box></Box>
            </Stack>

        </>
    )
}

export default Navbar