import "./App.css";

// import NavDesktop from './components/navbar/navlogo';
import React from "react";
import logo from "./images/yt.jpg";
import API from "./components/videos/homepage";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { useProSidebar } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="mainContainer">
      <div
        className="app"
        style={({ height: "100vh" },{width : "150px"}, { display: "flex" }, { opacity: "1" })}
      >
        <Sidebar style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
            >
              {" "}
              <img src={logo} alt="logo" className="logoImage"></img>
            </MenuItem>
            <MenuItem icon={<HomeOutlinedIcon />}> Home</MenuItem>
            <MenuItem icon={<HomeOutlinedIcon />}> Shorts</MenuItem>
            <MenuItem icon={<SubscriptionsOutlinedIcon />}>
              {" "}
              Subscriptions
            </MenuItem>
            <MenuItem icon={<VideoLibraryOutlinedIcon />}> Library</MenuItem>
            <MenuItem icon={<RestoreOutlinedIcon />}> History</MenuItem>
            <MenuItem icon={<WatchLaterOutlinedIcon />}> Watch Later</MenuItem>
            <MenuItem icon={<ThumbUpOffAltOutlinedIcon />}>
              {" "}
              Liked video
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className="videothumbnail">
        <API />
      </div>
    </div>
  );
}

export default App;
