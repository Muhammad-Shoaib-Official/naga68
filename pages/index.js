import Head from 'next/head'
import React from 'react'
import HomeModule from '../src/module/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeModule />
      {/* <div style={{ padding: "10px" }}>
        <button className='btn btn-primary'>login</button>
        <button className='btn btn-secondary'>Signup</button>
        <button className='btn btn-secondary btn-lg_primary'>Signup</button>
      </div> */}
    </>
  )
}

export default Home
