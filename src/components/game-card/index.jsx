import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/material'
import { PlayArrow } from '@mui/icons-material';
import { game1, infoIcon } from '../../../public/assets/export'

const GameCard = ({ game }) => {
    return (
        <Box key={game?.title} className="game_card uppercase" width={162} height={214} borderRadius={4} sx={{ backgroundImage: `url(${game?.image.src})` }}>
            <h4>{game?.title}</h4>
            <p> bet naga</p>
            <p className='text_hover'> {game?.subTitle}</p>
            {
                game?.topTag &&
                <span className='tag_top'>{game?.topTag}</span>
            }
            {
                game?.bottomTag &&
                <span className='tag_bottom' >{game?.bottomTag}</span>
            }
            <Box className="play_btn">
                <Link href={""}>
                    <PlayArrow sx={{ fontSize: 35, color: "#fff" }} />
                </Link>
            </Box>
            <Box className='info_icon'>
                <Image src={infoIcon} alt={"infoIcon"} />
            </Box>
            <Box className="layer" borderRadius={4} />
        </Box>
    )
}

export default GameCard