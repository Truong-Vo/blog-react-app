import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import SideBar from '../../Sidebar/SideBar'
import './Home.scss'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search)
      // console.log('>>>test', res)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  )
}
