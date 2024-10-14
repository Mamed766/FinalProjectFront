"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "cookies-next";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUserId(decoded._id);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/api/v2/userProfile/profile/${userId}`,
        formData
      );

      const { token } = response.data;
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      //@ts-ignore
      setCookie("token", token, { expires: tomorrow });

      const decoded: any = jwtDecode(token);
      setUserId(decoded._id);
      window.location.reload();
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="pt-20">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your current password"
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
