// import Container from 'react-bootstrap/Container';
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./navlogo.css";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import img from "../../images/yt.jpg"
// import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from "@mui/icons-material/Mic";
import Avatar from '@mui/material/Avatar';

function NavDesktop() {
  return (
    <Navbar className="navbar">
      <div className="navbarOuterBox">
        <div className="navFirstComponent">
       
          <div className="youtubeLogo">
          <img  className='logoImage' src={img} alt='youtubeImage' />
          </div>
        </div>
        <div className="navSecondComponent">
          <div className="searchBox">
            <div className="searchBarcover">
              <input className="searchBar" placeholder="Search" type="text" />
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
            <div className="searchMike">
              <MicIcon />
            </div>
          </div>
        </div>
        <div className="navThirdComponent">
          <div className="addVideoIcon"><VideoCallIcon/></div>
          <div className="notificationIcon"><NotificationsIcon/></div>
          <div className="emailidIcon"><Avatar/></div>
        </div>
      </div>
    </Navbar>
  );
}
export default NavDesktop;
