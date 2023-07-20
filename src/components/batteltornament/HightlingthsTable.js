
import { Badge, Box, Tabs, Tab, Grid, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
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
    {
        id: 4,
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
        id: 5,
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
        id: 6,
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
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
                <Image className='img' width={22} height={22} src={data.diceImg} alt='icon-image2' />
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
        title: 'Player',
        render: (data) =>
            <div className='player_colum'>
                <Badge
                    className='baged_img'
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        backgroundColor: "#55657e",
                    }}
                    badgeContent={data.playerCount}
                    sx={{
                        "& .MuiBadge-badge": {
                            borderRadius: '50%',
                            color: "#fff",
                            backgroundColor: "#55657e",
                        }
                    }}
                >
                    <Image fill className='img_circle' src={data.playerImg} alt='icon-image3' /></Badge>
                <span className='name fw-600'>{data.playerName}</span>
            </div>
    },
    {
        title: 'Bet Amount',
        render: (data) => <div className='betamoutn_colum'>
            <div className='bet_icon_image'>
                <Image src={data.betImg} fill alt='icon-image3' />
            </div>
            <span className='bet_amount'>{data.betAmount}</span>
        </div>
    },
    {
        title: 'Multiplier',
        render: (data) => <span className={data.multiplyerAmount > data.betAmount ? "win_amount" : "lose_amount"}>x{data.multiplyerAmount}</span>
    },
    {
        title: 'Payout',
        render: (data) => <div className='betamoutn_colum'>
            <div className='bet_icon_image'>
                <Image src={data.betImg} fill alt='icon-image4' />
            </div>
            <span className='bet_amount'>{data.betAmount}</span>
        </div>
    },
]
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="TabPanel"
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

function changeID(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const HightlingthsTable = (props) => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const tabScrollAble = useMediaQuery('(max-width:620px)');

    return (
        <div className='battelAndTornament_section'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ borderColor: "divider", mb: 4, p: 0 }}>

                        <Tabs
                            variant={tabScrollAble ? "scrollable" : ''}
                            value={value}
                            onChange={handleChange}
                            scrollButtons={true}
                            allowScrollButtonsMobile
                            TabIndicatorProps={{
                                sx: {
                                    // backgroundColor: "rgba(76, 0, 39, 1)",
                                    height: "0px",
                                    // borderRadius: " 10px 10px 0 0",
                                },
                            }}
                            sx={{
                                transition: "all 0.3s ease-in-out",
                                "& button": {
                                    color: "#93acd3",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    mr: { sm: 4, xs: 2 },
                                },
                                "& button:hover": {
                                    color: "#fff",
                                },
                                "& button:focus": {
                                    color: "#fff",
                                },
                                "& button:active": {
                                    color: "#fff",
                                },
                                "& button.Mui-selected": {
                                    color: "#fff",
                                    backgroundColor: "#2283f6",
                                    borderRadius: "3rem",
                                },
                            }}
                        >
                            {[{ label: 'All bets', changeId: 0 },
                            { label: 'High rolleras', changeId: 1 },
                            { label: 'Rare wins', changeId: 3 },].map(tabs => (
                                <Tab disableRipple key={tabs.label} label={tabs.label} {...changeID(tabs.changeId)} />
                            ))}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <GlobalTable tableData={tableMock} columns={columns} PaginationReq headBG />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <GlobalTable tableData={tableMock} columns={columns} PaginationReq  headBG/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <GlobalTable tableData={tableMock} columns={columns}  PaginationReq headBG/>
                    </TabPanel>
                </Grid>
            </Grid>


        </div>
    )
}

export default HightlingthsTable
