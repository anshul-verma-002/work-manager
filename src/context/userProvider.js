"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "../service/userService";

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await currentUser();
        // console.log(await currentUser());
        setUser(response.user);

      } catch (error) {
        console.log(error.response);
        setUser(undefined);
      } finally {
        setTimeout(() => {
          setLoading(false);
        },2000);
      }
    }

    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
