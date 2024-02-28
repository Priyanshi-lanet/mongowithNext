"use client";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");
  const [error, seterror] = useState("");
  console.log(name);
  const handleSubmit = async () => {
    e.preventDefalult();

    if (!name || !email || !passward) {
      seterror("All feild are nessacary");
      return;
    }
    //     const res = await fetch("api/register", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name,
    //         email,
    //         passward,
    //       }),
    //     });

    //     if (res.ok) {
    //       const form = e.target;
    //       form.reset();
    //       router.push("/");
    //     } else {
    //       console.log("User registration failed.");
    //     }
    //   };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { Content_Type: "application/json" },
          body: JSON.stringify({
            name,
            email,
            passward,
          }),
        });
        if (response.status === 200) {
          setname("");
          setemail("");
          setpassward("");
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (e) {
        console.log(e);
      }
    };
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register the details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="full name"
          />
          <input
            onChange={(e) => setemail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setpassward(e.target.value)}
            type="passward"
            placeholder="Passward"
          />
          <button>Register </button>
          <div className="bg-red-500 text-white">{error}</div>
          <Link href={"/login"} className="text-sm mt-3 text-right">
            Already have an account <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
