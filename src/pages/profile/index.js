import axios from "axios";
import { useEffect, useState } from "react";
import {FiEdit2} from 'react-icons/fi'
function Profile() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const [editUserData, setEditUserData] = useState({
    name: "",
    contact: "",
    gender: "",
    telephone: "",
    area: "",
    about: "",
    location: "",
  });

  const fetchUserData = () => {
    axios
      .get("https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    setEditProfile((value) => !value);
  };
  const handleChange = (e) => {
    setEditUserData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/user",
        editUserData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        fetchUserData();
      })
      .catch((err) => {
        console.error(err.response);
      });
  };
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    axios
      .post(
        "https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/user/image",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);

        setUserData(data => ({
          ...data,
          imageUrl: res.data.imageUrl
        }))
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  return (
    <div>
      <h1>Profile</h1>
      {error && <h3>Something went wrong!</h3>}
      <h3>Name: {userData.name}</h3>
      <h3>About: {userData.about}</h3>
      <h3>Contact: {userData.contact}</h3>
      <img src={userData.imageUrl} width="100px" height="100px" alt="Profile" />
      <button onClick={handleEditProfile}> <FiEdit2 /> Edit Profile</button>
      {editProfile && (
        <div className="edit-profile">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={editUserData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contact"
              name="contact"
              value={editUserData.contact}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={editUserData.gender}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Telephone"
              name="telephone"
              value={editUserData.telephone}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Area"
              name="area"
              value={editUserData.area}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="About"
              name="about"
              value={editUserData.about}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={editUserData.location}
              onChange={handleChange}
            />
            <input type="file" onChange={handleImageUpload} accept="image" />

            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
