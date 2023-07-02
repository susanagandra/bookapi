import React, { useState, useEffect } from "react";
import { Container, UserInfoContainer, Name, Email, ProfilePicture, UpdateButton, ModalOverlay, ModalContainer, ModalTitle, ModalCloseButton, ModalForm, ModalFormGroup, ModalLabel, ModalInput, ModalActions, ModalSubmitButton, ModalCancelButton } from "./style.js";

const UserProfile = () => {
  const [setError] = useState(null);
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
    <Container>
    <UserInfoContainer>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <ProfilePicture src={user.profile_picture} alt={user.name} />
    </UserInfoContainer>

    <UpdateButton onClick={handleShowModal}>Update Profile</UpdateButton>

    {showModal && (
      <ModalOverlay>
        <ModalContainer>
          <ModalCloseButton onClick={handleCloseModal}>X</ModalCloseButton>
          <ModalTitle>Update Profile</ModalTitle>
          <ModalForm onSubmit={updateUserProfile}>
            <ModalFormGroup>
              <ModalLabel>Name:</ModalLabel>
              <ModalInput
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </ModalFormGroup>
            <ModalFormGroup>
              <ModalLabel>Email:</ModalLabel>
              <ModalInput
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ModalFormGroup>
            <ModalFormGroup>
              <ModalLabel>Profile picture:</ModalLabel>
              <ModalInput
                as="textarea"
                rows={5}
                placeholder="Enter image"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </ModalFormGroup>
            <ModalActions>
              <ModalSubmitButton type="submit">Update</ModalSubmitButton>
              <ModalCancelButton onClick={handleCloseModal}>
                Cancel
              </ModalCancelButton>
            </ModalActions>
          </ModalForm>
        </ModalContainer>
      </ModalOverlay>
    )}
  </Container>
);
};

export default UserProfile;
