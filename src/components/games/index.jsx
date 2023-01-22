import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { homeIcon } from '../../../public/assets/export'
import { DynamicSlider, GameCard } from '../export'

const Games = ({ title, gamesList }) => {
    return (
        <>
            <Box className="flex-between games">
                <Box className="flex-center cursor-pointer" gap={1}>
                    <Image src={homeIcon} alt="homeIcon" />
                    <h4>{title}</h4>
                </Box>
                <Box>
                    <button className='btn_gray'>view all</button>
                </Box>
            </Box>
            <DynamicSlider>
                {
                    gamesList?.map(game => <GameCard key={game.title} game={game} />)
                }
            </DynamicSlider>
        </>
    )
}

export default Games