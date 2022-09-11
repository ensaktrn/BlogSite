import "./sideBar.css"
import resim from "../image/aboutMe.jpg"

export default function Sidebar() {
  return (
    <div className="sideBar">
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="aboutMeImg" src={resim} alt="ben" />
        <p className="aboutmeText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis itaque excepturi similique. Asperiores porro sequi quo atque, 
          repellendus recusandae enim magni vel non minima totam, sapiente dolores doloremque consequuntur deleniti.</p>
       </div> 
       <div className="sideBarItem">
        <span className="sidebarTitle">CATEGORİES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
       </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-youtube"></i>
        </div>
       </div>
    </div>
  )
}
