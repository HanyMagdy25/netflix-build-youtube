import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { selectUser } from "../../redux/userSlice";
import Navbar from "../Navbar/Navbar";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqW8JKlxECfgKG_-OJQKl3oC3FLUg-HeGpzzPN6k5p-GYkC19U2bLPL0xzw8ds-MPTEU&usqp=CAU"
            alt="profile"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <h3>Plans (Current Plan: premium)</h3>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
