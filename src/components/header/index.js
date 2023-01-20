import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { BonusIcon, recoon } from '../../../public/assets/export'

const HeaderComp = () => {
    return (
        <Grid container sx={{ alignContent: { xs: "center" }, justifyContent: { xs: "center" } }}>
            <Grid item xs={12} md={6} >
                <Box>
                    <h1 className='h1'>Leading Crypto Casino</h1>
                    <p>Enjoy 5000+ crypto games, fast payouts and 24/7 live support. Make the best of the superior Bitcoin Casino.</p>
                    <Stack direction="row">
                        <button className='btn btn-secondary btn-lg_primary'>Signup</button>
                        <Box className="flex-center" sx={{ background: "#fff", flexDirection: "row", maxWidth: 225, }}>
                            <p>
                                Get 300 Free Spins +
                                150% on your deposit
                            </p>
                            <Image src={BonusIcon} alt={"BonusIcon"} />
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Image src={recoon} alt={"BonusIcon"} />
            </Grid>
        </Grid>
    )
}

export default HeaderComp