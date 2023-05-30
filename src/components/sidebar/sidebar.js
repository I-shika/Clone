// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import "./sidebar.css";
import { Link } from 'react-router-dom';





function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link to="/"><ExploreOutlinedIcon/></Link></li>
        <li><Link to="/"><SubscriptionsOutlinedIcon/></Link></li>
        <li><Link to="/"><VideoLibraryOutlinedIcon/></Link></li>
      </ul>
    </nav>
     
    </div>
  );
}

export default Sidebar;


// <div className="homebutton">
// <div className="homeIcon">
//   <HomeOutlinedIcon />
// </div>
// <div className="homeText">
//   <Link to="./homepage.js">Home</Link>
// </div>
// </div>
// <div className="explrobutton">
// <div className="exploreIcon">
//   <ExploreOutlinedIcon />
// </div>
// <div className="exploreText">
// <Link to='/'>Explore </Link>
// </div>
// </div>
// <div className="subscriptionbutton">
// <div className="subscriptionIcon">
//   <SubscriptionsOutlinedIcon />
// </div>
// <div className="subscriptionText">Subscriptions</div>
// </div>
// <div className="librarybutton">
// <div className="libraryIcon">
//   <VideoLibraryOutlinedIcon />
// </div>
// <div className="libraryText">Library</div>
// </div>