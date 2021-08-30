import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get("https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res)
      setUserData(res.data)
      setError(false)

    }).catch(err => {
      setError(true)
    });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {error && <h3>Something went wrong!</h3>}
      <h3>Name: {userData.name}</h3>
      <img src={userData.imageUrl} width="100px" height="100px" alt="Profile" />
    </div>
  );
}

export default Profile;
