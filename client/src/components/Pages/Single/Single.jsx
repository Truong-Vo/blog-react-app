import React from 'react'
import SideBar from '../../Sidebar/SideBar'
import SinglePost from '../../SinglePost/SinglePost'
import './Single.scss'

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  )
}
