// import { Sidebar } from "react-custom-sidebar";
// import React,{ useState } from "react";
// import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import VideoThumbnail from "../videos/videothumbnails";




// function Sidebarcustom() {
//     const [isMenuOpen, setIsMenuOpened] = useState(false);
//     const menuItems = [
//         {
//           title: "Home",
//           link: "../videos/videothumbnail.js",
//           icon: <ExploreOutlinedIcon  />,
//         },
//         {
//           title: "Mails",
//           link: "/mails",
//           icon: <ExploreOutlinedIcon />,
//         },
//         {
//           title: "Services",
//           link: "/services",
//           icon: <ExploreOutlinedIcon />,
//         },
//         {
//           title: "Contacts",
//           link: "/contacts",
//           icon: <ExploreOutlinedIcon />,
//         },
//       ];
//       const handleLogout = () => {
//         console.log("logout clicked");
//       };return (
//         <div className="App">
//           <BrowserRouter>
//             <Sidebar
//               menuItems={menuItems}
//               theme="light"
//               logoUrl="add logo url here"
//               themeColors='white'
//               showLogout={true}
//               handleLogout={handleLogout}
//               userDetails={{
//                 name: "User name",
//                 description: "designation", // 
//                 avatar: "add user avatart url here",
//               }}
//               closeOnLinkClick={false}
//               isSidebarOpened={isMenuOpen}
//               handleSidebarToggle={setIsMenuOpened}
//               showToggleButton={true}
//             >
//               // main content here
//               <Routes>
//                 <Route path="/" element={< VideoThumbnail />} />
               
//               </Routes>
//             </Sidebar>
//           </BrowserRouter>
//         </div>
//       );
// }

// export default Sidebarcustom;