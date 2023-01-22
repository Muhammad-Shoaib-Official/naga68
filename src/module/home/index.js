import React from 'react'
import BattleCard from '../../components/batteltornament/BattleCard'
import HightlingthsTable from '../../components/batteltornament/HightlingthsTable'
import { HeaderComp, TopFeatures, Statistics, Games } from '../../components/export'
import { gamesList } from '../../mockData/gamesList'
const HomeModule = () => {
    return (
        <>
            <HeaderComp />
            <TopFeatures />
            <Games title={"In-House Games"} gamesList={gamesList} />
            <Games title={"Top"} gamesList={gamesList} />
            <Games title={"Hot"} gamesList={gamesList} />
            <Games title={"New"} gamesList={gamesList} />
            <BattleCard />
            <HightlingthsTable />
            <Statistics />
        </>
    )
}

export default HomeModule