import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BonusIcon, recoon } from '../../../public/assets/export'

const HeaderComp = () => {
    return (
        <div className='hero-wrapper'>
            <Grid container alignItems="center"  >
                <Grid item xs={12} md={6} >
                    <Box className="hero-content">
                        <div className='hero-wrap-heading'>
                            <h1 className='h1'><span>Leading</span> Crypto Casino</h1>
                            <p>Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the best of the superior Bitcoin Casino.</p>
                        </div>
                        <Box className="hero-signup-btn" display="flex" alignItems="center" >
                            <button className='btn btn-secondary btn-lg_primary'>Sign up</button>
                            <Box className="hero-signup-btn-text flex-center" width="100%" sx={{ background: "#fff", flexDirection: "row", maxWidth: "210px", }} borderRadius="0 22px 22px 0" marginLeft="-2px" paddingLeft="9px" paddingY="2px" paddingRight="2px">
                                <p>
                                    Get <b>300</b> Free Spins +
                                    <b> 150%</b> on your deposit
                                </p>
                                <Image src={BonusIcon} alt={"BonusIcon"} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src={recoon} alt={"BonusIcon"} />
                </Grid>
            </Grid>
        </div>
    )
}

export default HeaderComp