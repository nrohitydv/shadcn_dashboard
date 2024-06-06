import { Button } from "@/components/ui/button";
import React from "react";

const FormPage = () => {
  return (
    <form className="flex flex-col items-center text-primary p-10 mt-14 ">
      <h1>Profile</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="bio">Bio</label>
      <input type="textarea" id="bio" />
      <label htmlFor="urls">Urls</label>
      <input type="text" id="urls" />
      <Button className="border mt-3 fill-slate-100 rounded-md">
        Update Profile
      </Button>
    </form>
  );
};

export default FormPage;
