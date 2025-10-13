import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ForgetPassword = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md">
        <div className="bg-gray-200 w-lg p-3">
         
          <div className="flex justify-between border-b-2 pb-2">
            <h1 className="text-lg">Forget Password</h1>
            <button className="text-2xl">
              <IoIosCloseCircle />
            </button>
          </div>

      
          <div className="flex justify-center p-3 mt-1.5">
          
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

             
              <div>
                <label
                  htmlFor="otp"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

             
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Re-enter new password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

             
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
