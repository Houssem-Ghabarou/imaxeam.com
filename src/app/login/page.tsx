import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Imaxeam.com",
  description:
    "Welcome! Sign-in to access your files securely. Keep me logged in Sign in.",
};
const Login = () => {
  return (
    <div className="px-10 xl:px-55 xl:py-65 py-40  min-h-screen flex  gap-8 w-full justify-between xl:items-center">
      <div className="hidden xl:inline xl:w-[50%]">
        <img src="/login.png" alt="login" />
      </div>
      <div className="flex flex-col gap-4 w-[100%] xl:w-[50%]">
        <h1 className="text-orange-100">Welcome!</h1>
        <p>Sign-in to access your files securely.</p>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100"
        />
        <input
          type="password"
          placeholder="Name"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-[1px] focus:ring-orange-100"
        />
        {/* keep me logged in checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label>Keep me logged in</label>
        </div>
        <button className="bg-orange-100 text-white w-[98%] self-center py-3 rounded-4xl   cursor-pointer transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
