import React from "react";
import "@/app/globals.css";
import Link from "next/link";
const LoginScreen = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="passward" placeholder="Passward" />
          <button>Login </button>
          <div className="bg-red-500 text-white">Error</div>
          <Link href={"/register"} className="text-sm mt-3 text-right">
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
