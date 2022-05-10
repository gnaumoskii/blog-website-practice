import React from 'react'
import {Link } from 'react-router-dom'

const Nav = ( {setSearch}) => {
  return (
  <nav className="p-0 m-0 navbar navbar-light bg-light text-center">
    <form id='searchMenu' className="col-6-sm" onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='search'>Search Posts</label>
      <input
        id="search"
        type="text"
        autoComplete="off"
        placeholder="Search Posts"
        onChange={(e)=> {
          setSearch(e.target.value);
        }}
      >
      </input>
    </form>
    <ul className='menu col-6-sm'>
      <li><Link to="/" className='navmenu'>Home</Link></li>
      <li><Link to="/post" className='navmenu'>New Post</Link></li>
      <li><Link to="/about" className='navmenu'>About</Link></li>
    </ul>
  </nav>


  )
}

export default Nav