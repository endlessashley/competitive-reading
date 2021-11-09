import React from 'react';

import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';

// import './style.css';
import {GiBookshelf, GiTrophy, GiCardRandom, GiStrong} from "react-icons/gi"
import ReactTooltip from 'react-tooltip';
import {Link} from 'react-router-dom'

export default function NavIcons(){
    return (
        <div className="nav-key">
        <div className="view-bookshelf">
          <Link to = "/readBookHistory"><i className="nav-icons" alt="bookshelf" data-tip="View Your Bookshelf"><GiBookshelf /></i> </Link>
          <ReactTooltip />
         
        </div>
        <div className="view-leaderboard">
          <i className="nav-icons" alt="trophy" data-tip="View Leaderboard"><GiTrophy /></i>
          <ReactTooltip />
        </div>
        <div className="view-random">
          <i className="nav-icons" alt="random" data-tip="Get Random Book Recommendation"><GiCardRandom /></i>
          <ReactTooltip />
        </div>
        </div>
      );
    }