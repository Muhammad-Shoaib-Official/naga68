import React from 'react'
import BattleCard from '../../components/batteltornament/BattleCard'
import HightlingthsTable from '../../components/batteltornament/HightlingthsTable'
import { HeaderComp, TopFeatures, Statistics } from '../../components/export'
const HomeModule = () => {
    return (
        <>
            <HeaderComp />
            <TopFeatures />
            <BattleCard/>
            <HightlingthsTable/>
            <Statistics />
        </>
    )
}

export default HomeModule