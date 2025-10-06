import React, { useState } from "react";

import api from "../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading]= useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(loginData);
   
      try {
      const res = await api.post("/auth/login", loginData);
      toast.success(res.data.message);
      sessionStorage.setItem("userData", JSON.stringify(res.data.data));
      setLoginData({
        email: "",
        password: "",
      });
      navigate("/userdashboard");
    } catch (error) {
      console.log(error);
      toast.error(
        `Error : ${error.response?.status} | ${error.response?.data?.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login to <span className="text-blue-600">HireHub</span>
        </h1>

        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
