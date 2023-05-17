import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about" data-testid ="about-link">About</Link>
      <br/>
      <Link to="/data" data-testid ="data-link">Data</Link>
      <br/>
      <Link to="/newAbout" data-testid ="newAbout-link">New About</Link>
    </div>
  )
}

export default Home