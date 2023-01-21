import { Badge, Grid } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import GlobalTable from '../GlobalTable/GlobalTable';
const tableMock = [
    {
        id: 1,
        diceImg: "/assets/battelTornament/dice.svg",
        dicename: 'Dice',
        time: "5:30:51 PM",
        playerName: "User1234",
        playerImg: "/assets/battelTornament/0.svg",
        playerCount: 9,
        betImg: "/assets/battelTornament/DOGE.svg",
        betAmount: 0.00002,
        multiplyerAmount: 2.09797665,
        payoutImg: "/assets/battelTornament/DOGE.svg",
        payoutAmount: 2.896778567,
    },
    {
        id: 2,
        diceImg: "/assets/battelTornament/dice.svg",
        dicename: 'Dice',
        time: "5:30:51 PM",
        playerName: "User1234",
        playerImg: "/assets/battelTornament/1.svg",
        playerCount: 9,
        betImg: "/assets/battelTornament/BFG.svg",
        betAmount: 0.00002,
        multiplyerAmount: 2.09797665,
        payoutImg: "/assets/battelTornament/BFG.svg",
        payoutAmount: 2.896778567,
    },
    {
        id: 3,
        diceImg: "/assets/battelTornament/limbo.svg",
        dicename: 'Limbo',
        time: "5:30:51 PM",
        playerName: "User1234",
        playerImg: "/assets/battelTornament/2.svg",
        playerCount: 9,
        betImg: "/assets/battelTornament/USDT.svg",
        betAmount: 3.00002,
        multiplyerAmount: 2.09797665,
        payoutImg: "/assets/battelTornament/USDT.svg",
        payoutAmount: 2.896778567,
    },
]
const columns = [
    {
        title: 'Name',
        render: (data) =>
            <div className='nameColum'>
                <Image className='img' width={22} height={22} src={data.diceImg} />
                <span className='name fw-600'>{data.dicename}</span>
            </div>
    },
    {
        title: 'Time',
        render: (data) => <div className='nameColum'>
            <span className='name fw-600'>{data.time}</span>
        </div>
    },
    {
        title: 'Bet Amount',
        render: (data) => <div className='betamoutn_colum'>
            <span className='bet_amount'>{data.betAmount}</span>
        </div>
    },
]

const BattleCard = () => {
  return (
    <div className='battelCard'>
        <Grid container spacing={2}>
            <Grid item  xs={12} sm={6} lg={4}>
                <div className='card'>
                    <div className='card_banner_img_wrapper'>
                        <h4 className='fw-700'>Free-to-play FunFury Battle</h4>
                        <div className='card_counter'>
                            <span>00</span>
                            <span>00</span>
                            <span>00</span>
                            <span className='couter_tag'>Finish in</span>
                        </div>
                        <div className='_prize'>
                            <span className='uppercase pool'>Prize pool</span>
                            <span className='uppercase fw-800 prize'>$150</span>
                        </div>
                    </div>
                    <div className='card_content'>
                        <GlobalTable tableData={tableMock} columns={columns} />

                    <div className='view_battel flex-center'>
                        <button className='btn '>View Battle</button>
                    </div>
                    </div>
                </div>

            </Grid>
            <Grid item  xs={12} sm={6} lg={4}>
                <div className='card'>
                    <div className='card_banner_img_wrapper'>
                        <h4 className='fw-700'>Free-to-play FunFury Battle</h4>
                        <div className='card_counter'>
                            <span>00</span>
                            <span>00</span>
                            <span>00</span>
                            <span className='couter_tag'>Finish in</span>
                        </div>
                        <div className='_prize'>
                            <span className='uppercase pool'>Prize pool</span>
                            <span className='uppercase fw-800 prize'>$150</span>
                        </div>
                    </div>
                    <div className='card_content'>
                        <GlobalTable tableData={tableMock} columns={columns} />

                    <div className='view_battel flex-center'>
                        <button className='btn '>View Battle</button>
                    </div>
                    </div>
                </div>

            </Grid>
            <Grid item  xs={12} sm={6} lg={4}>
                <div className='card'>
                    <div className='card_banner_img_wrapper'>
                        <h4 className='fw-700'>Free-to-play FunFury Battle</h4>
                        <div className='card_counter'>
                            <span>00</span>
                            <span>00</span>
                            <span>00</span>
                            <span className='couter_tag'>Finish in</span>
                        </div>
                        <div className='_prize'>
                            <span className='uppercase pool'>Prize pool</span>
                            <span className='uppercase fw-800 prize'>$150</span>
                        </div>
                    </div>
                    <div className='card_content'>
                        <GlobalTable tableData={tableMock} columns={columns} />

                    <div className='view_battel flex-center'>
                        <button className='btn '>View Battle</button>
                    </div>
                    </div>
                </div>

            </Grid>
        </Grid>
    </div>
  )
}

export default BattleCard