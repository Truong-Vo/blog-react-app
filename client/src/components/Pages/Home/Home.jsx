import React from 'react'
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import SideBar from '../../Sidebar/SideBar'
import './Home.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  )
}
