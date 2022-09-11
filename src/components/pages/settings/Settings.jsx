import "./settings.css"
import Sidebar from "../../sideBar/Sidebar"
import ppImg from "../../image/pp.JPG"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={ppImg} alt="pp" />
                <label htmlFor="fileInput">
                    <i className="settingsppIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Enes"/>
                <label>Email</label>
                <input type="email" placeholder="enes_akturan@gmail.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
                
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
