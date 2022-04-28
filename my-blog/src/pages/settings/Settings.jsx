import "./settings.css";
import Sidebar from "../../componenets/sidebar/Sidebar";
import Satya from "./satya.png";

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
          <div className="settingsProfilePicture">
            <img src={Satya} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsProfilePictureIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="satya" />
          <label>Email</label>
          <input type="email" placeholder="satya@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
