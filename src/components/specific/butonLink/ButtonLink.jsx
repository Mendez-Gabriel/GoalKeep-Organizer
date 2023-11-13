import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ Text, link, className }) => {

  return (
      <div>
          <li className="nav-item mx-3 py-2">
              <Link to={link} className={`nav-link active ${className} text-light`}>{Text}</Link>
          </li>
      </div>
  )
}

export default ButtonLink;