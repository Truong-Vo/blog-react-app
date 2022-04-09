import React, { useEffect, useState } from 'react'
import './SideBar.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SideBar() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBarListItem" key={c.id}>
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook-square"></i>
          <i className="sideBarIcon fa-brands fa-twitter-square"></i>
          <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
