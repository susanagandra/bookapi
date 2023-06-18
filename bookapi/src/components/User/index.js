import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
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
  

  const updateUserProfile = (event) => {

    event.preventDefault();

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
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the profile.");
      });
  }


  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px"}}>
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <img
          src={user.profile_picture}
          alt={user.name}
          style={{ maxWidth: "40%", height: "auto" }}
        />
      </div>

      <Button variant="primary" onClick={handleShowModal}>
        Update Profile
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
    
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateUserProfile}>
            <Form.Group controlId="formTitle">
              <Form.Label>Neme: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile picture: </Form.Label>
              <Form.Control
               as="textarea" 
               rows={5} placeholder="Enter image" 
               value={profilePicture} 
               onChange={(e) => setProfilePicture(e.target.value)} 
               />

              </Form.Group>
              <Button variant="primary" type="submit">
              Update
            </Button>{" "}
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
    </div>
  );
};

export default UserProfile;
