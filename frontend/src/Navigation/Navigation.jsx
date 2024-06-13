import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <header>
            <Link to="/home">
                Home
            </Link>
            <Link to="/Post">
                Post
            </Link>
        </header>
      <main>
        <Outlet/>   
      </main>
    </div>
  )
}

export default Navigation
