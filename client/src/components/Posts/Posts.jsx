import React from 'react'
import Post from '../Post/Post'
import './Posts.scss'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}
