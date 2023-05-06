import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const token = sessionStorage.getItem("token");
  
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    fetch(`http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data);  
        setName(data.data.name);
        setEmail(data.data.email);
        setProfilePicture(data.data.profile_picture);    
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while authenticating.");
      });
  }, []);


  const updateUserProfile = () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        profile_picture: profilePicture
      }),
    };

    fetch(`http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data);  
        setName(data.data.name);
        setEmail(data.data.email);
        setProfilePicture(data.data.profile_picture);
        setIsUpdating(false);    
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the profile.");
      });
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px"}}>
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
          <img
          src={user.profile_picture}
          alt={user.name} 
          style={{ maxWidth: "10%", height: "auto" }}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "20px" }}>
          {!isUpdating && (
          <button style={{ backgroundColor: "blue", color:"white" }} onClick={() => setIsUpdating(true)}>Update Profile</button>
          )}
          {isUpdating && (
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
              <button style={{ backgroundColor: "blue", color:"white" }} onClick={updateUserProfile}>Save</button>
              <button style={{ backgroundColor: "red", color:"white" }}onClick={() => setIsUpdating(false)}>Cancel</button>
        </div>
        )}
        <div></div>        
    </div>
    </div>
  );
};

export default UserProfile;
