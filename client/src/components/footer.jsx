import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Economics">Economics</Link></li>
        <li><Link to="/posts/categories/Politics">Politics</Link></li>
        <li><Link to="/posts/categories/Geography">Geography</Link></li>
        <li><Link to="/posts/categories/Food">Science</Link></li>
        <li><Link to="/posts/categories/Sports">Sports</Link></li>
        <li><Link to="/posts/categories/Culture">Culture</Link></li>
        <li><Link to="/posts/categories/Others">Others</Link></li>
        </ul> 
        <div className="footer__copyright">
          <small>All Rights Reserved &copy; Copyright, RUCHIR PRABHUNE</small>
        </div>
    </footer>
  )
}

export default Footer