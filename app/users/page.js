"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";

function users() {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    const callApi = () => {
      const url = `http://localhost:3000/api/contact`;
      fetch(url, { cache: "no-store" })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("ddtt", JSON.stringify(data, null, 2));
          // setData(data);
          setUserList(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    callApi();
  }, []); // Empty dependency array

  console.log("UserList", JSON.stringify(UserList.topic, null, 2));
  return (
    <>
      <div>
        <h1>Usernames:</h1>
        <ul>
          {UserList?.topic?.map((item) => (
            <li
              className="mx-20 my-20 border-r-2 border-radius: 2px"
              key={item._id}
            >
              {item.username}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default users;
