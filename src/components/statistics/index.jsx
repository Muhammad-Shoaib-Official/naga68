import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { bitcoin_icon } from "../../../public/assets/export"
import { statisticsList } from '../../constants/statistics';

const Statistics = () => {
    return (
        <>
            <div className='statistics-wrapper'>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xl={2.5} lg={2.8}>
                        <div className='statistics-wrap-01 flex-between'>
                            <div className="statistic-content statistic-text">
                                <p>12</p>
                                <span>Crypto <br />networks</span>
                            </div>
                            <div className="statistic-content statistic-text">
                                <p>55</p>
                                <span>Crypto <br />currencies</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={7.6} lg={7.6} >
                        <div className="statistic-content statistic-img-wrap ">
                            {statisticsList?.map((item) => <div key={item} className='statistic-content-img w-100'>
                                <Image src={item} alt="" width="91px" height="45px" />
                            </div>
                            )}
                        </div>
                    </Grid>
                    <Grid item xl={1} lg={1} >
                        <div className="statistic-content show-all">
                            <Link href="#">Show All</Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Statistics