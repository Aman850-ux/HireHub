import React, { useState } from "react";
import {toast} from "react-hot-toast";
import starting from "../assets/working.jpg";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const Validate = () => {
    let isvalid = true;
    const err = {};
    if (registerData.fullName.length < 3) {
      err.fullName = "Name should be of Atlest 3 Characters";
      isvalid = false;
    }
    if (!/^[A-Za-z ]+$/.test(registerData.fullName)) {
      err.fullName = "Only Alphabets are allowed";
      isvalid = false;
    }
    if ( !/^[A-Za-z\d._]+@gmail.com$/.test(registerData.email) || registerData.email.length < 10 ) {
      err.email = "Please enter a Valid Email";
      isvalid = false;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test( registerData.password)) {
      err.password = "Please choose a Strong Password";
      isvalid = false;
    }
    if (registerData.password !== registerData.confirmPassword) {
      err.confirmPassword = "Password Not Match";
      isvalid = false;
    }
    setError(err);
    return isvalid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!Validate()) {
      setLoading(false);
      toast.error("Please Solve the Errors");
      return;
    }
    setTimeout(() => {
      console.log(registerData);
      setRegisterData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
      toast.success("Registration Sucessfull");
    }, 2000);
  };

 return (
  <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8">
      
      <div className="hidden md:block w-1/2">
        <img
          src={starting}
          alt="Register"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    
      <div className="flex-1">
        <h1 className="font-bold text-3xl mb-6 text-gray-800">
          Create an Account
        </h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            {error.fullName && (
              <p className="text-red-500 text-xs mt-1">{error.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            {error.email && (
              <p className="text-red-500 text-xs mt-1">{error.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            {error.password && (
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  </section>
);

};

export default Register;