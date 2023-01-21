import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { box, cash_back, crypto_boxes, mining, naga_charges, rack_backImg, win_real } from '../../../public/assets/export'

const TopFeatures = () => {
    return (
        <Box className="top-features">
            <Grid className='grid' container>
                <Grid item className='grid_cell win_real flex-between' >
                    <h4>Win Real Crypto by Free Play</h4>
                    <div className='win-real-img'>
                        <Image src={win_real} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell free_crypto flex-between' >
                    <h4>Free Crypto Boxes</h4>
                    <div className='free-crypto-img'>
                        <Image src={win_real} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell naga_charges flex-between'  >
                    <h4>Fury Charge</h4>
                    <div className='naga-charges-img '>
                        <Image src={naga_charges} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell welcome_bonus flex-between'  >
                    <h4>Cashback up to 25%</h4>
                    <div className='welcome-bonus-img '>
                        <Image src={cash_back} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell cash_back flex-between'>
                    <h4>Free Crypto Boxes</h4>
                    <div className='welcome-bonus-img '>
                        <Image src={cash_back} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell rack_back flex-between'>
                    <h4>Rakeback</h4>
                    <div className='rack-back-img '>
                        <Image src={rack_backImg} alt="" />
                    </div>
                </Grid>
                <Grid item className='grid_cell mining flex-between' >
                    <h4>Mining & Staking up to 100% APY</h4>
                    <div className='mining-img '>
                        <Image src={mining} alt="" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopFeatures