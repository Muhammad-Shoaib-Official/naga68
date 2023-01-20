import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { LogoIcon } from '../../../public/assets/export'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <Box className="flex-center" ml={-4} >
                <Image className="logo_image" src={LogoIcon} alt="LogoIcon" width={100} height={50} />
                <h3 className="uppercase logo_text h3">naga<span>68</span></h3>
            </Box>
        </Link>
    )
}

export default Logo