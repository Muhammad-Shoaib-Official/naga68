import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { box, cash_back, crypto_boxes, mining, naga_charges, rack_backImg, win_real } from '../../../public/assets/export'

const TopFeatures = () => {
    return (
        <Box className="top-features">
            <Box className='top-features_grid'>
                <Box item className='grid_cell win_real flex-between' sx={{ backgroundImage: `url(${win_real.src})` }} >
                    <h4>Win Real Crypto by Free Play</h4>
                    {/* <Box className='win-real-img'>
                        <Image src={win_real} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell free_crypto flex-between' >
                    {/* <h4>Free Crypto Boxes</h4> */}2
                    {/* <Box className='free-crypto-img'>
                        <Image src={win_real} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell naga_charges flex-between'  >
                    {/* <h4>Fury Charge</h4> */}3
                    {/* <Box className='naga-charges-img '>
                        <Image src={naga_charges} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell welcome_bonus flex-between'  >
                    {/* <h4>Cashback up to 25%</h4> */}4
                    {/* <Box className='welcome-bonus-img '>
                        <Image src={cash_back} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell cash_back flex-between'>
                    {/* <h4>Free Crypto Boxes</h4> */}5
                    {/* <Box className='welcome-bonus-img '>
                        <Image src={cash_back} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell rack_back flex-between'>
                    {/* <h4>Rakeback</h4> */}6
                    {/* <Box className='rack-back-img '>
                        <Image src={rack_backImg} alt="" />
                    </Box> */}
                </Box>
                <Box item className='grid_cell mining flex-between' >
                    {/* <h4>Mining & Staking up to 100% APY</h4> */}7
                    {/* <Box className='mining-img '>
                        <Image src={mining} alt="" />
                    </Box> */}
                </Box>
            </Box>
        </Box>
    )
}

export default TopFeatures